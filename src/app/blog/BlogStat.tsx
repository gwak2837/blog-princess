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
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-center leading-8">
            <div>상위 블로그 수</div>
            <div>{content.blogCount}</div>
            <div>평균 문단 개수</div>
            <div>{content.aver_text}</div>
            <div>평균 이미지 개수</div>
            <div>{content.aver_image}</div>
            <div>평균 비디오 개수</div>
            <div>{content.aver_video}</div>
            <div>평균 글자 수</div>
            <div>{content.aver_korean_chars}</div>
          </div>
        )
      )}
    </>
  )
}
