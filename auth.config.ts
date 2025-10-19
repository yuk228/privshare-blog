import type { NextAuthConfig } from 'next-auth'

const authConfig: NextAuthConfig = {
  trustHost: true,
  providers: [],
  callbacks: {
    authorized: ({ auth }) => !!auth,
  },
}

export default authConfig
