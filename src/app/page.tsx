import Image from 'next/image'

import ImageGenerationForm from './ImageGenerationForm'
import WordForm from './WordForm'

export default function Home() {
  return (
    <div>
      <h1 className="mx-2 my-8 text-4xl">원고 작성하기</h1>
      <WordForm />
      <h2 className="mx-2 mt-16 mb-6 text-3xl">결과</h2>
      <div className="my-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry s standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>

      <ImageGenerationForm />
    </div>
  )
}
