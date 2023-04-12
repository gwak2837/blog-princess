'use client'

import { blogStatFromKeywordAtom } from '@/common/recoil'
import { useRecoilValue } from 'recoil'

export default function BlogStat() {
  const { loading, content } = useRecoilValue(blogStatFromKeywordAtom)

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-full h-80 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ) : (
        content && (
          <p className="leading-8">
            <pre>{JSON.stringify(content)}</pre>
          </p>
        )
      )}
    </>
  )
}
