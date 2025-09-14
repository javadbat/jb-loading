'use client';
import React, { PropsWithChildren, useEffect, useImperativeHandle, useState, type CSSProperties } from 'react';
import 'jb-loading';

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

export const JBLoading = React.forwardRef((props:PropsWithChildren<Props>, ref) => {
  const element = React.useRef<HTMLElement>(null);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  return (
    <jb-loading style={props.style} ref={element} class={props.className}>{props.children}</jb-loading>
  );
});
JBLoading.displayName = 'JBLoading';
export type Props = {
    className?:string,
    style?:CSSProperties
}

