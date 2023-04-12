import Image from 'next/image'
import Link from 'next/link'

import BlogStat from './BlogStat'
import BlogStatForm from './BlogStatForm'

export default function BlogPage() {
  return (
    <div className="mx-2">
      <h1 className="mx-2 my-8 text-4xl">블로그 통계</h1>
      <BlogStatForm />

      <h2 className="mx-2 mt-16 mb-6 text-3xl">결과</h2>
      <BlogStat />
    </div>
  )
}
