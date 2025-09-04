import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ ...props }) => (
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            {...props}
          />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700"
            {...props}
          />
        ),
        h3: ({ ...props }) => (
          <h3
            className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base md:text-lg"
            {...props}
          />
        ),
        ul: ({ ...props }) => (
          <ul
            className="space-y-3 mb-6 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        ol: ({ ...props }) => (
          <ol
            className="space-y-3 mb-6 text-gray-700 dark:text-gray-300"
            {...props}
          />
        ),
        li: ({ ...props }) => (
          <li className="ml-4 leading-relaxed" {...props} />
        ),
        a: ({ ...props }) => (
          <a
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 transition-colors duration-200"
            {...props}
          />
        ),
        code: ({ ...props }) => (
          <code
            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md text-sm font-mono"
            {...props}
          />
        ),
        pre: ({ ...props }) => (
          <pre
            className="bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6"
            {...props}
          />
        ),
        blockquote: ({ ...props }) => (
          <blockquote
            className="border-l-4 border-blue-500 pl-6 py-2 my-6 italic text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg"
            {...props}
          />
        ),
        table: ({ ...props }) => (
          <div className="overflow-x-auto my-6">
            <table
              className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg"
              {...props}
            />
          </div>
        ),
        th: ({ ...props }) => (
          <th
            className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700"
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td
            className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
