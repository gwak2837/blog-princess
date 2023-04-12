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
        content && <pre className="leading-8">{JSON.stringify(content, null, 2)}</pre>
      )}
    </>
  )
}
