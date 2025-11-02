'use client'

import { UserDto } from '@/entities/users/users'
import useSWR from 'swr'

interface CurrentUser {
    data: UserDto
    error: Error | undefined
    isLoading: boolean
}
export function useCurrentUser(): CurrentUser {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR('/api/v1/users/me', fetcher)
    return { data: data?.data, error, isLoading }
}
