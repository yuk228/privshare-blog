'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MarkdownRenderer } from '@/components/article/markdown-renderer'
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from '@/components/ui/resizable'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface SplitEditorProps {
    title: string
    body: string
    onTitleChange: (title: string) => void
    onBodyChange: (body: string) => void
    actions?: React.ReactNode
}

export function SplitEditor({
    title,
    body,
    onTitleChange,
    onBodyChange,
    actions,
}: SplitEditorProps) {
    const [showPreview, setShowPreview] = useState(true)

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] gap-4">
            <div className="flex items-center gap-4">
                <Input
                    type="text"
                    placeholder="Enter a title..."
                    value={title}
                    onChange={e => onTitleChange(e.target.value)}
                    className="flex-1"
                />
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowPreview(!showPreview)}
                    className="md:hidden"
                >
                    {showPreview ? (
                        <EyeOff className="h-5 w-5" />
                    ) : (
                        <Eye className="h-5 w-5" />
                    )}
                </Button>
                {actions}
            </div>

            <div className="md:hidden flex-1 overflow-hidden">
                {showPreview ? (
                    <ScrollArea className="h-full border rounded-lg p-6">
                        <h1 className="text-4xl font-bold mb-8">{title}</h1>
                        <MarkdownRenderer>{body || ''}</MarkdownRenderer>
                    </ScrollArea>
                ) : (
                    <Textarea
                        value={body}
                        onChange={e => onBodyChange(e.target.value)}
                        className="h-full resize-none font-mono"
                    />
                )}
            </div>

            <div className="hidden md:block flex-1 overflow-hidden">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="rounded-lg border"
                >
                    <ResizablePanel defaultSize={50} minSize={30}>
                        <div className="h-full flex flex-col">
                            <div className="px-4 py-2 border-b bg-muted/50">
                                <h2 className="text-sm font-semibold">
                                    Editor
                                </h2>
                            </div>
                            <div className="flex-1 overflow-hidden p-4">
                                <Textarea
                                    value={body}
                                    onChange={e => onBodyChange(e.target.value)}
                                    className="h-full w-full resize-none font-mono border-0 focus-visible:ring-0 shadow-none"
                                />
                            </div>
                        </div>
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    <ResizablePanel defaultSize={50} minSize={30}>
                        <div className="h-full flex flex-col">
                            <div className="px-4 py-2 border-b bg-muted/50">
                                <h2 className="text-sm font-semibold">
                                    Preview
                                </h2>
                            </div>
                            <ScrollArea className="flex-1 p-4">
                                <h1 className="text-2xl font-bold mb-4">
                                    {title || 'Untitled'}
                                </h1>
                                <MarkdownRenderer>
                                    {body || ''}
                                </MarkdownRenderer>
                            </ScrollArea>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}
