import Image from 'next/image'
import Link from 'next/link'

import ImageGenerationForm from '../ImageGenerationForm'
import PostForm from './PostForm'
import PostFromPost from './PostFromPost'

export default function PostPage() {
  return (
    <div className="">
      <h1 className="mx-2 my-8 text-4xl">글 다시 쓰기</h1>
      <PostForm />

      <h2 className="mx-2 mt-16 mb-6 text-3xl">결과</h2>
      <div className="my-4">
        <PostFromPost />
      </div>

      <ImageGenerationForm />
    </div>
  )
}
