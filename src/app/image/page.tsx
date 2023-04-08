import Image from 'next/image'
import Link from 'next/link'

import ImageForm from './ImageForm'
import ImageFromPost from './ImageFromPost'

export default function ImagePage() {
  return (
    <div className="mx-2">
      <h1 className="mx-2 my-8 text-4xl">이미지 생성하기</h1>
      <ImageForm />

      <h2 className="mx-2 mt-16 mb-6 text-3xl">결과</h2>
      <ImageFromPost />
    </div>
  )
}
