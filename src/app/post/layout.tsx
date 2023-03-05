import { ReactNode } from 'react'

export const metadata = {
  title: '다시 쓰기 - 블프',
  description: '기존 블로그 글을 맥락을 유지하여 다시 작성해줍니다',
}

type Props = {
  children: ReactNode
}

export default function PostLayout({ children }: Props) {
  return <>{children}</>
}
