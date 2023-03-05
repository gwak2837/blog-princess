import Image from 'next/image'
import Link from 'next/link'

import PostForm from '../post/PostForm'

export default function PostPage() {
  return (
    <div className="">
      <h1 className="mx-2 my-8 text-4xl">이미지 생성하기</h1>
      <PostForm />

      <h2 className="mx-2 mt-16 mb-6 text-3xl">결과</h2>
      <Image src="/images/marin.webp" alt="인공지능 생성 이미지" width="1024" height="1024" />
    </div>
  )
}
