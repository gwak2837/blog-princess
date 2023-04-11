'use client'

import { NEXT_PUBLIC_BACKEND_URL } from '@/common/constants'
import { postFromKeywordsAtom } from '@/common/recoil'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

type Form = {
  type: number
  keyword: string
  keywordCount: number
  keywordsThatShouldBeIncluded: string
  keywordsThatShouldBeExcluded: string
  maximumLength: number
  maximumParagraphLength: number
  domain: string
}

export default function WordForm() {
  const { handleSubmit, register } = useForm<Form>({
    defaultValues: {
      type: 2,
      keyword: '핑크 프린세스',
      keywordCount: 10,
      keywordsThatShouldBeIncluded: '안녕',
      keywordsThatShouldBeExcluded: '살인',
      maximumLength: 500,
      maximumParagraphLength: 10,
      domain: '핑크 프린세스',
    },
  })

  const setPostFromKeywords = useSetRecoilState(postFromKeywordsAtom)

  async function submit({
    type,
    keyword,
    keywordCount,
    keywordsThatShouldBeIncluded,
    keywordsThatShouldBeExcluded,
    maximumLength,
    maximumParagraphLength,
    domain,
  }: Form) {
    setPostFromKeywords({ loading: true, content: null })

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/multitext`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text1: type,
        text2: keyword,
        text3: keywordCount,
        text4: keywordsThatShouldBeIncluded,
        text5: keywordsThatShouldBeExcluded,
        text6: maximumLength,
        text7: maximumParagraphLength,
        text8: domain,
      }),
    })
    const result = await response.json()

    setPostFromKeywords({ loading: false, content: result.new_text })
  }

  return (
    <form className="grid grid-cols-[auto_1fr] gap-2 items-center" onSubmit={handleSubmit(submit)}>
      <label className="my-2 items-center">종류</label>
      <select className="p-2 border" {...register('type')}>
        <option value="1">후기성</option>
        <option value="2">정보성</option>
        <option value="3">광고성</option>
      </select>

      <label className="my-2 items-center">키워드</label>
      <input className="p-2 border" {...register('keyword', { required: true })} />

      <label className="my-2 items-center">키워드 개수</label>
      <input
        className="p-2 border"
        min="0"
        type="number"
        {...register('keywordCount', { required: true })}
      />

      <label className="my-2 items-center">포함하고 싶은 내용</label>
      <input
        className="p-2 border"
        type="text"
        {...register('keywordsThatShouldBeIncluded', { required: true })}
      />

      <label className="my-2 items-center">제외하고 싶은 내용</label>
      <input
        className="p-2 border"
        type="text"
        {...register('keywordsThatShouldBeExcluded', { required: true })}
      />

      <label className="my-2 items-center">글자 수</label>
      <input
        className="p-2 border"
        min="0"
        type="number"
        {...register('maximumLength', { required: true })}
      />

      <label className="my-2 items-center">문단 수</label>
      <input
        className="p-2 border"
        min="0"
        type="number"
        {...register('maximumParagraphLength', { required: true })}
      />

      <label className="my-2 items-center">분야</label>
      <input className="p-2 border" type="text" {...register('domain', { required: true })} />

      <button className="p-4 w-full col-span-2 rounded bg-pink-950">제출</button>
    </form>
  )
}
