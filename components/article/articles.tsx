import Link from "next/link";
import Image from "next/image";
import { ArticleSummary } from "@/entities/articles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/functions/shared/formatdate";
import { memo } from "react";

type Props = {
  articles: ArticleSummary[];
};

export const ArticlesList = memo(function ArticlesList({ articles }: Props) {
  return (
    <div className="space-y-6">
      {articles.map(article => (
        <HorizontalCard key={article.uuid} article={article} />
      ))}
    </div>
  );
});

type HorizontalCardProps = {
  article: ArticleSummary;
};

const HorizontalCard = memo(function HorizontalCard({
  article,
}: HorizontalCardProps) {
  return (
    <article className="group bg-background border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-foreground/30">
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-80 h-48 md:h-48 flex-shrink-0 overflow-hidden bg-muted">
            <Image
              alt={article.title}
              src={
                article.thumbnailUrl ||
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop&crop=center"
              }
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>

          <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-foreground line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-2">
                {article.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 md:pt-4 mt-3 md:mt-4 border-t border-border">
              <div className="flex items-center gap-2 md:gap-3">
                <Avatar className="h-7 w-7 md:h-8 md:w-8">
                  <AvatarImage
                    src={article.author.avatarUrl}
                    alt={article.author.name}
                  />
                  <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                    {article.author.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs md:text-sm font-medium text-foreground">
                    {article.author.name}
                  </p>
                  <time className="text-xs text-muted-foreground">
                    {formatDate(article.createdAt)}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
});
