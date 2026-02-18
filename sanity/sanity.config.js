import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import deskStructure from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "Therapist Website",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
});
