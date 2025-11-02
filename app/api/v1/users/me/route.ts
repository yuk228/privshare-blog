import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import {
    ErrorResponse,
    NotFound,
    Ok,
    Response,
    Unauthorized,
} from '@/services/api/responses'
import { currentUser } from '@/services/users/user'
import { UserDto } from '@/entities/users/users'

export async function GET(): Promise<
    NextResponse<Response<UserDto> | ErrorResponse>
> {
    const session = await auth()
    if (!session?.user) {
        return Unauthorized()
    }
    const user = await currentUser({ sessionUser: session.user })
    if (!user) {
        return NotFound()
    }
    return Ok({
        uuid: user.uuid,
        name: user.name,
        avatarUrl: user.avatarUrl || '',
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    })
}
