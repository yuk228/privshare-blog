import { User } from "next-auth";
import { prisma } from "@/prisma/prisma";

type Props = {
  sessionUser: User;
};

export async function currentUser({ sessionUser }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: sessionUser.email || "",
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
