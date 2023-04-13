'use client'

import { NEXT_PUBLIC_BACKEND_URL } from '@/common/constants'
import { postFromPostAtom } from '@/common/recoil'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

type Form = {
  postLength: number
  sex: number
  age: number
  job: string
  company: string
  companyDescription: string
  post: string
}

const defaultPost = `내 친구는 정말 멋진 친구야. 먼저, 그녀는 정말로 이해심이 많아서, 언제나 내 곁에서 내 얘기를 들어주고 조언해준다. 예를 들어, 전학을 가게 되어서 처음으로 새로운 학교에 왔을 때, 나는 많이 불안했었어. 그런데 내 친구는 항상 내 곁에서 지지해주고 함께 수업도 듣고 공부도 하면서, 새로운 친구들을 사귀도록 도와주었다.

또한, 내 친구는 정말로 활기차고 유머감각도 좋아서, 어디든 가면 분위기를 띄우고 즐겁게 해준다. 한 번 여름방학에 우리는 함께 바다로 여행을 갔었는데, 그녀가 항상 웃음을 자아내며 즐겁게 해주었다. 그리고 그녀는 나와 맛집 탐방도 좋아해서, 항상 새로운 음식점을 찾아서 함께 맛있는 음식도 먹으러 다니고 있다.

마지막으로, 내 친구는 정말로 신뢰할 수 있는 친구야. 언제나 내 비밀을 지켜주고, 어려울 때는 함께 고민하며 해결책을 찾아주고 있다. 한 번 시험 기간에 나는 정말로 스트레스가 많이 쌓였는데, 그녀는 항상 내 곁에서 나를 지켜주며 함께 공부도 하면서, 나에게 자신감을 북돋아주었다.

이러한 내 친구의 장점들은 정말로 끝이 없이 많지만, 이상으로 간단하게 소개해볼게! 내 친구와 함께 있으면 언제나 즐거움과 힐링을 느낄 수 있으니까, 다른 이들도 그녀와 함께하면서 행복을 느끼리라 생각해!`

export default function PostForm() {
  const { handleSubmit, register } = useForm<Form>({
    defaultValues: {
      postLength: 1000,
      sex: 1,
      age: 20,
      job: '백수',
      post: defaultPost,
      company: '(주)대추야자',
      companyDescription: '야자만큼 큰 대추를 생산해서 전국민을 먹여살리는 일',
    },
  })

  const setPostFromPost = useSetRecoilState(postFromPostAtom)

  async function submit({ post, postLength, sex, age, job, company, companyDescription }: Form) {
    setPostFromPost({ loading: true, content: null })

    const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/api/text`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: post,
        num: postLength,
        gender: sex,
        age,
        job,
        company,
        companyDescription,
      }),
    })
    const result = await response.json()

    setPostFromPost({ loading: false, content: result.new_text })
  }

  return (
    <form className="grid grid-cols-[auto_1fr] gap-2 items-center" onSubmit={handleSubmit(submit)}>
      <label className="my-2 items-center">글자 수</label>
      <input
        className="p-2 border"
        min="0"
        type="number"
        {...register('postLength', { required: true })}
      />

      <label className="my-2 items-center">글쓴이 성별</label>
      <select className="p-2 border" {...register('sex')}>
        <option value="1">남</option>
        <option value="2">여</option>
      </select>

      <label className="my-2 items-center">글쓴이 나이</label>
      <input
        className="p-2 border"
        min="0"
        max="1000"
        type="number"
        {...register('age', { required: true })}
      />

      <label className="my-2 items-center">글쓴이 직업</label>
      <input className="p-2 border" type="text" {...register('job', { required: true })} />

      <label className="my-2 items-center">업체명</label>
      <input className="p-2 border" type="text" {...register('company', { required: true })} />

      <label className="my-2 items-center">업체 설명</label>
      <input
        className="p-2 border"
        type="text"
        {...register('companyDescription', { required: true })}
      />

      <div className="my-2 col-span-2">
        <label className="my-2 items-center">내용</label>
        <textarea
          className="my-2 p-2 w-full min-h-[20rem] outline outline-slate-100"
          {...register('post')}
        />
      </div>

      <button className="p-4 w-full col-span-2  rounded bg-pink-200">제출</button>
    </form>
  )
}
