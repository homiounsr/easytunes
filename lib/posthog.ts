// lib/posthog.ts
import { PostHog } from "posthog-js";

const posthog = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
});

export default posthog;

