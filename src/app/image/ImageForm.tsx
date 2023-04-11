'use client'

import { NEXT_PUBLIC_BACKEND_URL } from '@/common/constants'
import { imageFromPostAtom } from '@/common/recoil'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

type Form = {
  post: string
}

const defaultPost = `아랍 히잡 시위(Arab Spring)는 2010년부터 2012년까지 중동과 북아프리카 지역에서 일어난 대규모 시민혁명과 민주화 운동을 의미합니다. 이 시위는 이라크와 튀니지에서 시작되어 이후 알제리, 이집트, 리비아, 예멘, 바레인, 시리아 등 다수의 아랍 국가로 확대되었습니다.`

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
