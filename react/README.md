# jb-loading React component

this component is React.js wrapper for [jb-loading](https://www.npmjs.com/package/jb-loading) web component.

svg loading React component:

- you can set custom color by css variable.

- it will fit its container DOM so you can use it in any size you want

- light and smooth animation

Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-loading) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBLoading.tsx) if you want to see and play with code


## instructions

### install

#### using npm:
```cmd
npm i jb-loading
```

in one of your js in pages

```js
import {JBLoading} from 'jb-loading/react';

```

in your jsx

```html
<JBLoading ></JBLoading>
```


### set custom style

in some cases in your project you need to change default style of web-component for example you need to change color.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component 
| css variable name                  | description                                                                                   |
| -------------                      | -------------                                                                                 |
| --jb-loading-color                 | loading color default is black `#000`                                                         |