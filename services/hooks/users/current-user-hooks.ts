import useSWR from 'swr'

export function useCurrentUser() {
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR('/api/v1/users/me', fetcher)
}
