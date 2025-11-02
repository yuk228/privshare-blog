import { useFormik } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import useSWRMutation from 'swr/mutation'
import { useLocalStorage } from '@/services/hooks/local-storage-hooks'
import { ArticleDto, CreateArticleDto } from '@/entities/articles'
import { useRouter } from 'next/navigation'

type FormValues = CreateArticleDto

type UseCreateArticle = {
    data: ArticleDto | undefined
    formik: ReturnType<typeof useFormik<FormValues>>
    isMutating: boolean
    setToken: (token: string) => void
}

export function useCreateArticle(): UseCreateArticle {
    const [token, setToken] = useState('')
    const [title, , clearTitle] = useLocalStorage('title')
    const [body, , clearBody] = useLocalStorage('body')
    const router = useRouter()

    async function createArticle(
        url: string,
        { arg }: { arg: FormValues }
    ): Promise<ArticleDto> {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(arg),
        })
        return response.json()
    }

    const { trigger, data, isMutating } = useSWRMutation(
        '/api/v1/articles',
        createArticle
    )

    const formik = useFormik<FormValues>({
        initialValues: {
            title: title,
            description: '',
            body: body,
            slug: '',
            thumbnailUrl: '',
            isPublished: true,
            token: token,
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            description: yup
                .string()
                .required('説明は必須です。')
                .max(255, '説明は255文字以内で入力してください。'),
            slug: yup
                .string()
                .required('スラッグは必須です。')
                .max(255, 'スラッグは255文字以内で入力してください。'),
            thumbnailUrl: yup
                .string()
                .url()
                .required('サムネイルURLは必須です。')
                .max(255, 'サムネイルURLは255文字以内で入力してください。'),
        }),
        onSubmit: async values => {
            try {
                const title = localStorage?.getItem('title') || ''
                const body = localStorage?.getItem('body') || ''
                if (title === '' || body === '') return

                const submitValues: FormValues = {
                    ...values,
                    title: title,
                    body: body,
                }
                const response = await trigger(submitValues)
                clearTitle()
                clearBody()
                router.push(`/articles/${response.slug}`)
            } catch (error) {
                console.error('Article creation error:')
            }
        },
    })

    return {
        data,
        formik,
        isMutating,
        setToken,
    }
}
