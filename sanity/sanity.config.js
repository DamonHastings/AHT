import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./schemas";
import deskStructure from "./deskStructure";
import { locations, mainDocuments } from "./presentationResolve";

const frontendUrl = process.env.SANITY_STUDIO_PREVIEW_URL || "http://localhost:5173";

export default defineConfig({
  name: "default",
  title: "Arielle Hastings Therapy",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "gpgx1ndq",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    presentationTool({
      resolve: { locations, mainDocuments },
      previewUrl: {
        origin: frontendUrl,
        preview: "/",
      },
      allowOrigins: [frontendUrl, "http://localhost:5173"],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
