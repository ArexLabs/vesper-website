import { createAuthClient } from "better-auth/react";
import { twoFactorClient, adminClient } from "better-auth/client/plugins";

const baseURL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const authClient = createAuthClient({
  baseURL,
  plugins: [
    twoFactorClient(),
    adminClient()
  ]
});

export const { signIn, signUp, signOut, useSession } = authClient;
