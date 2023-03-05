import { ReactNode } from 'react'

export const metadata = {
  title: '이미지 생성 - 블프',
  description: '블로그 글에 어울리는 이미지를 생성해줍니다',
}

type Props = {
  children: ReactNode
}

export default function PostLayout({ children }: Props) {
  return <>{children}</>
}
