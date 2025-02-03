import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-loading",
    path: "./lib/JBLoading.js",
    outputPath: "./dist/JBLoading.js",
    external: [],
    umdName: "JBLoading",
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-loading-react",
    path: "./react/lib/JBLoading.tsx",
    outputPath: "./react/dist/JBLoading.js",
    external: ["jb-loading", "prop-types", "react"],
    globals: {
      "jb-loading": "JBLoading",
      react: "React",
      "prop-types": "PropTypes",
    },
    umdName:"JBLoadingReact",
    dir:"./react"
  },
];