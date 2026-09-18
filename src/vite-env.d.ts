/// <reference types="vite/client" />

/**
 * Environment variables for AI Engineer Hub.
 * 
 * To add Google Analytics or Search Console verification,
 * create a .env file in the project root with:
 *
 * VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * VITE_GOOGLE_SITE_VERIFICATION=your-verification-string
 *
 * Then access them in code via:
 * import.meta.env.VITE_GA_MEASUREMENT_ID
 * import.meta.env.VITE_GOOGLE_SITE_VERIFICATION
 */
interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
