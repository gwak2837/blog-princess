'use client'

import { useForm } from 'react-hook-form'

type Form = {
  keyword: string
}

export default function WordForm() {
  const { handleSubmit, register } = useForm<Form>({ defaultValues: { keyword: '' } })

  function submit() {}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label className="my-2 grid grid-cols-[auto_1fr] gap-2 items-center">
        <span>키워드</span>
        <input className="p-2 border" {...register('keyword')} />
      </label>
      <button className="p-4 w-full rounded bg-pink-200">제출</button>
    </form>
  )
}
