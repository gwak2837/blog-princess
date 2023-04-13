'use client'

import { NEXT_PUBLIC_BACKEND_URL } from '@/common/constants'
import { blogStatFromKeywordAtom } from '@/common/recoil'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

type Form = {
  keyword: string
  blogCount: number
}

export default function BlogStatForm() {
  const { handleSubmit, register } = useForm<Form>({
    defaultValues: {
      keyword: '주한미군',
      blogCount: 5,
    },
  })

  const setBlogStatFromKeyword = useSetRecoilState(blogStatFromKeywordAtom)

  async function submit({ keyword, blogCount }: Form) {
    setBlogStatFromKeyword({ loading: true, content: null })

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/keyword`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        keyword,
        num: blogCount,
      }),
    })
    const result = await response.json()

    setBlogStatFromKeyword({ loading: false, content: result })
  }

  return (
    <form className="grid grid-cols-[auto_1fr] gap-2 items-center" onSubmit={handleSubmit(submit)}>
      <label className="my-2 items-center">키워드</label>
      <input className="p-2 border" type="text" {...register('keyword', { required: true })} />

      <label className="my-2 items-center">상위 블로그 수</label>
      <input
        className="p-2 border"
        min="0"
        max="1000"
        type="number"
        {...register('blogCount', { required: true })}
      />

      <button className="p-4 w-full col-span-2  rounded bg-pink-200">제출</button>
    </form>
  )
}
