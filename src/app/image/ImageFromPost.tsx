'use client'

import Image from 'next/image'
import { imageFromPostAtom } from '@/common/recoil'
import { saveAs } from 'file-saver'
import { useRecoilValue } from 'recoil'

export default function ImageFromPost() {
  const { loading, URLs } = useRecoilValue(imageFromPostAtom)

  async function saveFiles() {
    if (!URLs) return

    for (let i = 0; i < URLs.length; i++) {
      saveAs(URLs[i], `image-${i}`)
      await new Promise((r) => setTimeout(r, 1000))
    }
  }

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-full h-80 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ) : URLs ? (
        <>
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {URLs?.map((URL, i) => (
              <Image
                key={i}
                src={URL}
                alt="인공지능 생성 이미지"
                className="snap-start shrink-0 w-[512px] h-[512px] mr-4 border"
                width="512"
                height="512"
              />
            ))}
          </div>
          <button className="my-4 p-4 w-full col-span-2 rounded bg-pink-200" onClick={saveFiles}>
            모두 다운로드
          </button>
        </>
      ) : (
        <>
          <Image
            src="/images/marin.webp"
            alt="인공지능 생성 이미지"
            className="mx-auto"
            width="512"
            height="512"
          />
          <button
            className="my-4 p-4 w-full col-span-2 rounded bg-pink-200"
            onClick={() => saveAs('/images/marin.webp', `marin`)}
          >
            다운로드
          </button>
        </>
      )}
    </div>
  )
}
