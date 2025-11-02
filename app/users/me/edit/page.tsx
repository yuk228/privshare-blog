import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { currentUser } from '@/services/users/user'
import { redirect } from 'next/navigation'

export default async function Page() {
    const session = await auth()
    if (!session?.user) {
        return redirect('/articles')
    }
    const user = await currentUser({ sessionUser: session.user })

    return (
        <div className="px-4 lg:px-8 max-w-4xl mx-auto mb-8">
            <div className="flex flex-row items-start md:items-center gap-6">
                <Avatar>
                    <AvatarImage
                        src={user?.avatarUrl || ''}
                        alt={user?.name || ''}
                    />
                    <AvatarFallback>
                        {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                        {user?.name}
                    </h1>
                </div>
            </div>
        </div>
    )
}
