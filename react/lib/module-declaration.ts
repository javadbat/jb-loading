export type JBLoadingSize = "xs" | "sm" | "md" | "lg" | "xl";
export type JBLoadingColor = "primary" | "secondary" | "neutral" | "content-inverse" | "content-primary" | "content-secondary";

declare module "react" {
    namespace JSX {
      interface IntrinsicElements {
        'jb-loading': JBLoadingType;
      }
      interface JBLoadingType extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
        "class"?:string,
        size?: JBLoadingSize,
        color?: JBLoadingColor,
      }
    }
}
