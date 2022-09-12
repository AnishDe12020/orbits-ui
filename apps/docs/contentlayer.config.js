import { defineDocumentType, makeSource } from "contentlayer/source-files";

const globalComputedFields = {
  slug: {
    type: "string",
    description: "The slug for the page",
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: "guides/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the guide",
      isRequired: true,
    },
  },
  computedFields: {
    ...globalComputedFields,
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the doc page",
      isRequired: true,
    },
  },
  computedFields: {
    ...globalComputedFields,
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Guide, Doc],
});
