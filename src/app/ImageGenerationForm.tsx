'use client'

import { postFromKeywordsAtom, postFromPostAtom } from '@/common/recoil'
import { usePathname, useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'

export default function ImageGenerationForm() {
  const router = useRouter()
  const pathname = usePathname()

  function generateImage() {
    if (pathname === '/') router.push('/image?from=keyword')
    else if (pathname === '/post') router.push('/image?from=post')
  }

  const { content: postFromKeyword } = useRecoilValue(postFromKeywordsAtom)
  const { content: postFromPost } = useRecoilValue(postFromPostAtom)

  return (
    <button
      className="my-4 p-4 w-full rounded bg-pink-200 disabled:bg-slate-200"
      disabled={pathname === '/' ? !postFromKeyword : pathname === '/post' ? !postFromPost : true}
      onClick={generateImage}
    >
      이미지 생성하기
    </button>
  )
}
