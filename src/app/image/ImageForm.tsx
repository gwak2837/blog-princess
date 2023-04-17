'use client'

import { imageFromPostAtom, postFromKeywordsAtom, postFromPostAtom } from '@/common/recoil'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { NEXT_PUBLIC_BACKEND_URL } from '@/common/constants'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'

type Form = {
  imageCount: number
  post: string
}

const defaultPost = `아랍 히잡 시위(Arab Spring)는 2010년부터 2012년까지 중동과 북아프리카 지역에서 일어난 대규모 시민혁명과 민주화 운동을 의미합니다. 이 시위는 이라크와 튀니지에서 시작되어 이후 알제리, 이집트, 리비아, 예멘, 바레인, 시리아 등 다수의 아랍 국가로 확대되었습니다.`

export default function ImageForm() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from')

  const { content: postFromKeyword } = useRecoilValue(postFromKeywordsAtom)
  const { content: postFromPost } = useRecoilValue(postFromPostAtom)

  const { handleSubmit, register } = useForm<Form>({
    defaultValues: {
      imageCount: 2,
      post:
        from === 'keyword'
          ? postFromKeyword?.join('\n') ?? ''
          : from === 'post'
          ? postFromPost?.join('\n') ?? ''
          : defaultPost,
    },
  })

  const setImageFromPost = useSetRecoilState(imageFromPostAtom)

  async function submit({ imageCount, post }: Form) {
    setImageFromPost({ loading: true, URLs: null })

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/image`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        num: +imageCount,
        text: post,
      }),
    })
    const result = await response.json()

    setImageFromPost({ loading: false, URLs: result.imageLink })
  }

  return (
    <form className="grid grid-cols-[auto_1fr] gap-2 items-center" onSubmit={handleSubmit(submit)}>
      <label className="my-2 items-center">이미지 수</label>
      <input
        className="p-2 border"
        min="0"
        max="20"
        type="number"
        {...register('imageCount', { required: true })}
      />

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
