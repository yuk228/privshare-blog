import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { NotFound, Unauthorized } from '@/services/api/responses'
import { currentUser } from '@/services/users/user'

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return Unauthorized()
  }
  const user = await currentUser({ sessionUser: session.user })
  if (!user) {
    return NotFound()
  }
  return NextResponse.json({ user })
}
