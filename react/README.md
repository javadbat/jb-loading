# jb-loading React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-loading)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-loading/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-loading-react)](https://www.npmjs.com/package/jb-loading-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-loading)

svg loading React component:

- you can set custom color by css variable.

- it will fit its container DOM so you can use it in any size you want

- light and smooth animation

Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-loading) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBLoading.tsx) if you want to see and play with code


## install

### using npm:

```sh
npm i jb-loading
```

in one of your js in pages

```js
import {JBLoading} from 'jb-loading/react';

```

in your jsx

```jsx
<JBLoading ></JBLoading>
```


### set custom style

in some cases in your project you need to change default style of web-component for example you need to change color.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component 

| css variable name                  | description                                                                                   |
| ----------------                   | ------------------                                                                            |
| --jb-loading-color                 | loading color default is black `#000`                                                         |
| --jb-loading-width                 | loading width default `100%`                                                                  |
| --jb-loading-height                | loading height default is `100%`                                                              |
