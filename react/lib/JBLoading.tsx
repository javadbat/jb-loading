'use client';
import React, { type PropsWithChildren, useImperativeHandle } from 'react';
import type {JBElementStandardProps} from 'jb-core/react'
import 'jb-loading';
import type {JBLoadingWebComponent} from 'jb-loading'

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

export const JBLoading = React.forwardRef((props:Props, ref) => {
  const element = React.useRef<HTMLElement>(null);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  const {children, ...otherProps} = props
  return (
    <jb-loading  ref={element} {...otherProps}>{children}</jb-loading>
  );
});
JBLoading.displayName = 'JBLoading';
export type Props = PropsWithChildren<JBElementStandardProps<JBLoadingWebComponent>>

