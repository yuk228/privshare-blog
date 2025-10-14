import { ArticleRequest, ArticleResponse } from "@/entities/articles";
import { useArticle } from "./article-hook";


type UseEditArticleRequest = {
  slug: string;
};


type FormValues = ArticleRequest & {
  token: string;
};

type UseEditArticleResponse = {
  article: ArticleResponse;
  isLoading: boolean;
  reloadArticle: () => void;
};

export function useEditArticle({ slug }: UseEditArticleRequest): UseEditArticleResponse {
    const { article } = useArticle({ slug });
}


