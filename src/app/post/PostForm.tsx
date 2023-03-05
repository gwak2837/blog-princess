'use client'

import { useForm } from 'react-hook-form'

type Form = {
  post: string
}

export default function PostForm() {
  const { handleSubmit, register } = useForm<Form>({ defaultValues: { post: '' } })

  function submit() {}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <textarea
        className="my-4 w-full min-h-[10rem] outline outline-slate-100"
        {...register('post')}
      />
      <button className="p-4 w-full rounded bg-pink-200">제출</button>
    </form>
  )
}
