'use client'

import { NEXT_PUBLIC_BACKEND_URL } from '@/common/constants'
import { imageFromPostAtom } from '@/common/recoil'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

type Form = {
  post: string
}

const defaultPost = `아랍 히잡 시위(Arab Spring)는 2010년부터 2012년까지 중동과 북아프리카 지역에서 일어난 대규모 시민혁명과 민주화 운동을 의미합니다. 이 시위는 이라크와 튀니지에서 시작되어 이후 알제리, 이집트, 리비아, 예멘, 바레인, 시리아 등 다수의 아랍 국가로 확대되었습니다.

아랍 히잡 시위는 지역 내 대통령이나 국왕 등 강력한 지도자들의 타락과 부패, 경제적 불평등, 정치적 억압 등에 대한 불만과 요구로부터 시작되었습니다. 시위는 처음에는 비폭력적인 시위로 시작되었지만, 경찰과 군대의 무력 진압과 반항적인 시위대들의 반격으로 점차 폭력적인 성격을 띄게 되었습니다.

아랍 히잡 시위는 이후 각 국가에서 다양한 결과를 가져왔습니다. 몇몇 국가에서는 지도자들이 사임하거나 대통령선거를 실시하는 등의 민주적 변화가 일어나기도 했지만, 다른 국가에서는 국가적인 분열, 내전, 테러리즘 등의 결과를 가져왔습니다.`

export default function ImageForm() {
  const { handleSubmit, register } = useForm<Form>({
    defaultValues: {
      post: defaultPost,
    },
  })

  const setImageFromPost = useSetRecoilState(imageFromPostAtom)

  async function submit({ post }: Form) {
    setImageFromPost({ loading: true, URL: null })

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: post,
      }),
    })
    const result = await response.json()

    setImageFromPost({ loading: false, URL: result.imageLink })
  }

  return (
    <form className="grid grid-cols-[auto_1fr] gap-2 items-center" onSubmit={handleSubmit(submit)}>
      <div className="col-span-2">
        <label className="my-2 items-center">내용</label>
        <textarea
          className="my-2 p-2 w-full min-h-[10rem] outline outline-slate-100"
          {...register('post')}
        />
      </div>

      <button className="p-4 w-full col-span-2  rounded bg-pink-200">제출</button>
    </form>
  )
}
