import { ReactNode } from 'react'

export const metadata = {
  title: '블로그 통계 - 블프',
  description: '키워드에 대한 블로그 통계를 검색합니다',
}

type Props = {
  children: ReactNode
}

export default function PostLayout({ children }: Props) {
  return <>{children}</>
}
