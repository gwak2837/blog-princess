import './globals.css'

import {
  APPLICATION_NAME,
  APPLICATION_SHORT_NAME,
  AUTHOR,
  CANONICAL_URL,
  KEYWORDS,
  SUBJECT,
} from '@/common/constants'
import localFont from '@next/font/local'
import Link from 'next/link'
import { ReactNode } from 'react'

import RecoilRoot from './RecoilRoot'

export const metadata = {
  title: '블프 - 블로그 프린세스',
  description: '블로그 글 자동 생성기',
}

const myFont = localFont({
  src: './PretendardVariable.woff2',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko-KR" className={myFont.className}>
      <meta property="og:site_name" content={APPLICATION_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={`${APPLICATION_SHORT_NAME} 로고`} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f98c24" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#f98c24" />

      <link rel="shortcut icon" href="/images/shortcut-icon.png" />
      <link rel="canonical" href={CANONICAL_URL} />
      <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      <meta name="author" content={AUTHOR} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="application-name" content={APPLICATION_SHORT_NAME} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={APPLICATION_SHORT_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="subject" content={SUBJECT} />
      <meta name="rating" content="general" />
      <meta name="robots" content="index,follow" />
      <meta name="revisit-after" content="3 days" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <body>
        <div className="max-w-screen-lg mx-auto relative">
          <main className="min-h-screen">
            <RecoilRoot>{children}</RecoilRoot>
          </main>
          <nav className="sticky bottom-0 grid grid-cols-3 justify-center items-center text-center border-t border-pink-300 bg-white">
            <Link href="/post" className="p-6">
              다시 쓰기
            </Link>
            <Link href="/" className="p-6">
              원고 작성
            </Link>
            <Link href="/image" className="p-6">
              이미지 생성
            </Link>
          </nav>
        </div>
      </body>
    </html>
  )
}
