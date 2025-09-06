import { auth } from "@/auth";
import {
  Forbidden,
  InternalServerError,
  Unauthorized,
  UnprocessableEntity,
  Updated,
} from "@/functions/api/responses";
import { canCreateArticle, updateArticle } from "@/functions/articles/article";
import { validateToken } from "@/functions/turnstile";
import { currentUser } from "@/functions/users/current-user";
import { NextRequest } from "next/server";

type Props = {
  params: Promise<{ uuid: string }>;
};

export async function PUT(request: NextRequest, { params }: Props) {
  const { uuid } = await params;
  const session = await auth();
  if (!session?.user) {
    return Unauthorized();
  }
  const user = await currentUser({ sessionUser: session.user });
  if (!user || !canCreateArticle(user)) {
    return user ? Forbidden() : Unauthorized();
  }
  const { title, description, body, slug, thumbnailUrl, token, isPublished } =
    await request.json();
  if (!(await validateToken({ token }))) {
    return UnprocessableEntity();
  }

  try {
    const article = await updateArticle({
      uuid,
      title,
      description,
      body,
      slug,
      thumbnailUrl,
      isPublished,
    });
    return Updated(article);
  } catch (error) {
    console.error("Article update error:", error);
    return InternalServerError();
  }
}
