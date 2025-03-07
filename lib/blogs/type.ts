export interface FrontMatter {
  title: string;
  description?: string;
};

export interface PostData {
  frontMatter: FrontMatter;
  content: string;
};