import { auth } from '@/auth'
import { canCreateArticle } from '@/services/articles/article'
import { currentUser } from '@/services/users/user'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
export async function Protected({ children }: Props) {
    const session = await auth()
    if (!session?.user) {
        return <></>
    }
    const user = await currentUser({ sessionUser: session.user })
    if (!user || !canCreateArticle(user)) {
        return <></>
    }

    return children
}
