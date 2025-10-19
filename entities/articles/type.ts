export interface FrontMatter {
  title: string
  description: string
  img?: string
  tags?: string[]
  date?: string
}

export interface PostSummary {
  FrontMatter: FrontMatter
  slug: string
}

export interface PostData {
  frontMatter: FrontMatter
  content: string
  slug: string
}
