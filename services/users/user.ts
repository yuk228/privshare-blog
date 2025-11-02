import { User } from 'next-auth'
import { prisma } from '@/prisma/prisma'

type currentUserProps = {
    sessionUser: User
}

export async function currentUser({ sessionUser }: currentUserProps) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: sessionUser.email || '',
            },
        })
        return user
    } catch (error) {
        console.error(error)
        return null
    }
}

type getUserByUuidProps = {
    uuid: string
}

export async function getUserByUuid({ uuid }: getUserByUuidProps) {
    try {
        const user = await prisma.user.findUnique({
            where: { uuid },
            select: {},
        })
        return user
    } catch (error) {
        console.error(error)
        return null
    }
}
