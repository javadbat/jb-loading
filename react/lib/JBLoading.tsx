import React, { PropsWithChildren, useEffect, useImperativeHandle, useState } from 'react';
import 'jb-loading';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-loading': JBLoadingType;
      }
      interface JBLoadingType extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
        "class"?:string,
      }
    }
}

export const JBLoading = React.forwardRef((props:PropsWithChildren<Props>, ref) => {
  const element = React.useRef<HTMLElement>(null);
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  return (
    <jb-loading ref={element} class={props.className}>{props.children}</jb-loading>
  );
});
JBLoading.displayName = 'JBLoading';
export type Props = {
    className?:string,
}

