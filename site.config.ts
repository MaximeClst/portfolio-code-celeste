export const SiteConfig = {
  title: "Code Celeste",
  description:
    "Développeur full-stack passionné, je crée des applications mobiles modernes et performantes. Spécialisé dans React Native, Expo et Next.js ",
  prodUrl: "https://code-celeste.com",
  domain: "code-celeste.com",
  appIcon: "/images/icon.png",
  company: {
    name: "Code Celeste",
    address: "La Réunion",
  },
  brand: {
    primary: "#007291", // Teal color for consistency
  },
  email: {
    from: "Maxime Céleste <contact.maximeclst@gmail.com>",
    contact: "contact.maximeclst@gmail.com",
  },
  maker: {
    image: "https://x.com/maxime_clst/photo",
    twitter: "https://x.com/maxime_clst",
    name: "Maxime",
  },
  features: {
    /**
     * If enable, you need to specify the logic of upload here : src/features/images/uploadImageAction.tsx
     * You can use Vercel Blob Storage : https://vercel.com/docs/storage/vercel-blob
     * Or you can use Cloudflare R2 : https://mlv.sh/cloudflare-r2-tutorial
     * Or you can use AWS S3 : https://mlv.sh/aws-s3-tutorial
     */
    enableImageUpload: false as boolean,
    /**
     * If enable, you need to go to src/lib/auth/auth.ts and uncomment the line with the emoji 🔑
     * This feature will authorize users to login with a password.
     * Customize the signup form here : app/auth/signup/page.tsx
     */
    enablePasswordAuth: false as boolean,
    /**
     * If enable, the user will be redirected to `/orgs` when he visits the landing page at `/`
     * The logic is located in middleware.ts
     */
    enableLandingRedirection: false as boolean,
    /**
     * If enable, the user will be able to create only ONE organization and all his settings will be synced with it.
     * It's disable the `/settings` page from the organization and the `/orgs/new` page.
     */
    enableSingleMemberOrg: false as boolean,
  },
};
