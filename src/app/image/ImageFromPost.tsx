'use client'

import { imageFromPostAtom } from '@/common/recoil'
import { saveAs } from 'file-saver'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

export default function ImageFromPost() {
  const { loading, URL } = useRecoilValue(imageFromPostAtom)

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-full h-80 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ) : (
        <div>
          <Image
            src={URL ?? '/images/marin.webp'}
            alt="인공지능 생성 이미지"
            className="mx-auto"
            width="512"
            height="512"
          />
          <button
            className="my-4 p-4 w-full col-span-2 rounded bg-pink-200"
            onClick={() => saveAs('/images/marin.webp', 'image.jpg')}
          >
            Download
          </button>
        </div>
      )}
    </>
  )
}
