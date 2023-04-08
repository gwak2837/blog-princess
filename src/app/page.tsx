import Image from 'next/image'

import ImageGenerationForm from './ImageGenerationForm'
import PostFromKeyword from './PostFromKeyword'
import WordForm from './WordForm'

export default function Home() {
  return (
    <div>
      <h1 className="mx-2 my-8 text-4xl">원고 작성하기</h1>
      <WordForm />

      <h2 className="mx-2 mt-16 mb-6 text-3xl">결과</h2>
      <div className="my-4">
        <PostFromKeyword />
      </div>

      <ImageGenerationForm />
    </div>
  )
}
