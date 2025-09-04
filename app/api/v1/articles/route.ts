import { auth } from "@/auth";
import { Unauthorized } from "@/functions/api/responses";

export async function POST() {
  const session = await auth();
  if (!session) {
    return Unauthorized();
  }
}
