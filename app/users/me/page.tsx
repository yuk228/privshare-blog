import { auth } from '@/auth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
                <Avatar
                    style={{
                        width: '120px',
                        height: '120px',
                    }}
                >
                    <AvatarImage
                        src={session?.user?.image || ''}
                        alt={session?.user?.name || ''}
                    />
                    <AvatarFallback className="text-4xl font-bold">
                        {session?.user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                        {session?.user?.name}
                        <Badge variant="outline">
                            {user?.role.toLowerCase()}
                        </Badge>
                    </h1>
                    <Link href="/users/me/edit">
                        <Button variant="outline">Edit Profile</Button>
                    </Link>
                </div>
            </div>
            <div className="mt-8">
                <Tabs defaultValue="articles" className="w-full">
                    <TabsList>
                        <TabsTrigger value="articles">Articles</TabsTrigger>
                        <TabsTrigger value="comments">Comments</TabsTrigger>
                    </TabsList>
                    <TabsContent value="articles">articles here</TabsContent>
                    <TabsContent value="comments">comments here</TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
