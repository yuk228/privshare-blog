'use client'

import { useLocalStorage } from '@/services/hooks/local-storage-hooks'
import { CreateArticleDialog } from '@/components/article/new/create-article-dialog'
import { SplitEditor } from '@/components/article/split-editor'

export default function Page() {
    const [title, setTitle] = useLocalStorage('title')
    const [body, setBody] = useLocalStorage('body')

    return (
        <div className="px-4 lg:px-8 mx-auto">
            <SplitEditor
                title={title}
                body={body}
                onTitleChange={setTitle}
                onBodyChange={setBody}
                actions={<CreateArticleDialog />}
            />
        </div>
    )
}
