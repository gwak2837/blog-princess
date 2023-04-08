'use client'

import { ReactNode } from 'react'
import { RecoilRoot as RR } from 'recoil'

type Props = {
  children: ReactNode
}

export default function RecoilRoot({ children }: Props) {
  return <RR>{children}</RR>
}
