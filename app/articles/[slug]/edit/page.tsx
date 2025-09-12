import { auth } from "@/auth";
import { Unauthorized } from "@/functions/api/responses";
import { currentUser } from "@/functions/users/user";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  console.log(slug);
  const session = await auth();
  if (!session?.user) {
    return Unauthorized();
  }
  const user = await currentUser({ sessionUser: session.user });
  if (!user) {
    return Unauthorized();
  }
}
