'use client'

import { useRouter } from 'next/navigation'

export default function ImageGenerationForm() {
  const router = useRouter()

  function generateImage() {
    router.push('/image')
  }

  return (
    <button className="p-4 w-full rounded bg-pink-200" onClick={generateImage}>
      이미지 생성하기
    </button>
  )
}
