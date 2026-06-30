export {};

declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        'jb-loading': JBLoadingType;
      }
      interface JBLoadingType extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
        "class"?:string,
      }
    }
}
