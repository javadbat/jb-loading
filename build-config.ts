import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-loading",
    path: "./lib/jb-loading.ts",
    outputPath: "./dist/jb-loading.js",
    external: ['jb-core',"jb-core/theme" ],
    globals: {
      "jb-core": "JBCore",
      "jb-core/theme": "JBCoreTheme",
    },
    umdName: "JBLoading",
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-loading-react",
    path: "./react/lib/JBLoading.tsx",
    outputPath: "./react/dist/JBLoading.js",
    external: ["jb-loading", "prop-types", "react", "jb-core"],
    globals: {
      "jb-loading": "JBLoading",
      react: "React",
      "prop-types": "PropTypes",
      "jb-core": "JBCore",
    },
    umdName:"JBLoadingReact",
    dir:"./react"
  },
];