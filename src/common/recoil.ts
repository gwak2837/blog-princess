import { atom } from 'recoil'

type Post = {
  loading: boolean
  content: string[] | null
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

type BlogStat = {
  loading: boolean
  content: Record<string, string> | null
}

export const blogStatFromKeywordAtom = atom<BlogStat>({
  key: 'blogStatFromKeywordAtom',
  default: {
    loading: false,
    content: null,
  },
})

type Image = {
  loading: boolean
  URLs: string[] | null
}

export const imageFromPostAtom = atom<Image>({
  key: 'imageFromPostAtom',
  default: {
    loading: false,
    URLs: null,
  },
})
