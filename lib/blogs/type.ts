export interface FrontMatter {
  title: string;
  description?: string;
  img?: string;
  tags?: string[];
};

export interface PostData {
  frontMatter: FrontMatter;
  content: string;
};