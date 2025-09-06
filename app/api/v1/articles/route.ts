import { auth } from "@/auth";
import {
  Created,
  Forbidden,
  InternalServerError,
  Unauthorized,
  UnprocessableEntity,
} from "@/functions/api/responses";
import { canCreateArticle, createArticle } from "@/functions/articles/article";
import { validateToken } from "@/functions/turnstile";
import { currentUser } from "@/functions/users/current-user";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return Unauthorized();
  }
  const user = await currentUser({ sessionUser: session.user });
  if (!user || !canCreateArticle(user)) {
    return user ? Forbidden() : Unauthorized();
  }

  const { title, description, body, slug, thumbnailUrl, token } =
    await request.json();

  if (!(await validateToken({ token }))) {
    return UnprocessableEntity();
  }

  try {
    const article = await createArticle({
      title,
      description,
      body,
      slug,
      thumbnailUrl,
      authorId: user?.id as number,
      isPublished: false,
    });
    return Created(article);
  } catch (error) {
    console.error("Article creation error:", error);
    return InternalServerError();
  }
}
