import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

// Webflow Cloud uses a specific mount path. 
// The builder expects "server" output for SSR.
export default defineConfig({
    base: "/app",
    output: "server",
    adapter: cloudflare({
        platformProxy: {
            enabled: true
        }
    }),
    integrations: [react()],
});
