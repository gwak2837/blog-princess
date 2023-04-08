'use client'

import { type } from 'os'

import { NEXT_PUBLIC_BACKEND_URL } from '@/common/constants'
import { postFromPostAtom } from '@/common/recoil'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

type Form = {
  post: string
  postLength: number
}

export default function PostForm() {
  const { handleSubmit, register } = useForm<Form>({
    defaultValues: { post: '글', postLength: 100 },
  })

  const setPostFromPost = useSetRecoilState(postFromPostAtom)

  async function submit({ post, postLength }: Form) {
    setPostFromPost({ loading: true, content: null })

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/text`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: post,
        num: postLength,
      }),
    })
    const result = await response.json()

    setPostFromPost({ loading: false, content: result.new_text })
  }

  return (
    <form className="grid grid-cols-[auto_1fr] gap-2 items-center" onSubmit={handleSubmit(submit)}>
      <label className="my-2 items-center">최대 글자 수</label>
      <input
        className="p-2 border"
        min="0"
        type="number"
        {...register('postLength', { required: true })}
      />

      <div className="col-span-2">
        <label className="my-2 items-center">내용</label>
        <textarea
          className="my-2 w-full min-h-[10rem] outline outline-slate-100"
          {...register('post')}
        />
      </div>

      <button className="p-4 w-full col-span-2  rounded bg-pink-200">제출</button>
    </form>
  )
}
