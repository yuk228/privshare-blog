"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";

const localStorage = typeof window !== "undefined" ? window.localStorage : null;
export default function Page() {

  const [title, setTitle] = useState(localStorage?.getItem("title") || "");
  const [content, setContent] = useState(localStorage?.getItem("content") || "");

  useEffect(() => {
    localStorage?.setItem("title", title);
    localStorage?.setItem("content", content);
  }, [title, content]);

  return (
    <div className="px-4 lg:px-8 max-w-4xl mx-auto mb-8">
      <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className="mt-8">
        <Tabs defaultValue="write" className="w-full">
          <TabsList>
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="write">
            <Write content={content} setContent={setContent}/>
          </TabsContent>
          <TabsContent value="preview">
            <Preview content={content} title={title} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

type WriteProps = {
  content: string;
  setContent: (content: string) => void;
}

function Write({ content, setContent }: WriteProps) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Textarea placeholder="content" className="h-[500px]" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
    </div>
  )
}

type PreviewProps = {
  content: string;
  title: string;
}

function Preview({ content, title }: PreviewProps) {
  return (
    <div className="w-full">
      <ScrollArea className="h-[500px]">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <MarkdownRenderer content={content || ""} />
      </ScrollArea>
    </div>
  )
}