'use client'

import { postFromKeywordsAtom } from '@/common/recoil'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'

export default function ImageGenerationForm() {
  const router = useRouter()
  const { content } = useRecoilValue(postFromKeywordsAtom)

  function generateImage() {
    router.push('/image')
  }

  return (
    <button
      className="p-4 w-full rounded bg-pink-200 disabled:bg-slate-200"
      disabled={!content}
      onClick={generateImage}
    >
      이미지 생성하기
    </button>
  )
}
