import { atom } from 'recoil'

type Post = {
  loading: boolean
  content: string | null
}

export const postFromKeywordsAtom = atom<Post>({
  key: 'postFromKeywordsAtom',
  default: {
    loading: false,
    content: null,
  },
})

export const postFromPostAtom = atom<Post>({
  key: 'postFromPostAtom',
  default: {
    loading: false,
    content: null,
  },
})
