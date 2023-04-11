'use client'

import { postFromPostAtom } from '@/common/recoil'
import { useRecoilValue } from 'recoil'

export default function PostFromPost() {
  const { loading, content } = useRecoilValue(postFromPostAtom)

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-full h-80 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ) : (
        <p className="leading-8">{content}</p>
      )}
    </>
  )
}
