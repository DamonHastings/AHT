import { defineCliConfig } from "@sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "gpgx1ndq",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  /**
   * Enable auto-updates for hosted studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: { autoUpdates: true },
});
