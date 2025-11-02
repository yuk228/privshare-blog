'use client'

import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MarkdownRenderer } from '@/components/article/markdown-renderer'
import { useLocalStorage } from '@/services/hooks/local-storage-hooks'
import { CreateArticleDialog } from '@/components/article/new/create-article-dialog'

export default function Page() {
    const [title, setTitle] = useLocalStorage('title')
    const [body, setBody] = useLocalStorage('body')

    return (
        <div className="px-4 lg:px-8 max-w-4xl mx-auto mb-8">
            <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <div className="mt-8">
                <Tabs defaultValue="write" className="w-full">
                    <div className="flex justify-between w-full">
                        <TabsList>
                            <TabsTrigger value="write">Write</TabsTrigger>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                        </TabsList>
                        <CreateArticleDialog />
                    </div>
                    <TabsContent value="write">
                        <Writer body={body} setBody={setBody} />
                    </TabsContent>
                    <TabsContent value="preview">
                        <Preview body={body} title={title} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

type WriterProps = {
    body: string
    setBody: (body: string) => void
}

function Writer({ body, setBody }: WriterProps) {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <Textarea
                    placeholder="content"
                    className="h-[500px]"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
            </div>
        </div>
    )
}

type PreviewProps = {
    body: string
    title: string
}

function Preview({ body, title }: PreviewProps) {
    return (
        <div className="w-full">
            <ScrollArea className="h-[500px]">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <MarkdownRenderer>{body || ''}</MarkdownRenderer>
            </ScrollArea>
        </div>
    )
}
