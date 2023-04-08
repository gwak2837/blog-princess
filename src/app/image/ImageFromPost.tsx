'use client'

import { imageFromPostAtom } from '@/common/recoil'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

export default function ImageFromPost() {
  const { loading, URL } = useRecoilValue(imageFromPostAtom)

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-full h-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ) : (
        <Image
          src={URL ?? '/images/marin.webp'}
          alt="인공지능 생성 이미지"
          width="1024"
          height="1024"
        />
      )}
    </>
  )
}
