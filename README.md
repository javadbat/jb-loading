# jb-loading

svg loading web component
by using this component you will get following benefits:

- you can set custom color by css variable.

- it will fit its container DOM so you can use it in any size you want

- light and smooth animation

Demo & Sample    
in github: <https://javadbat.github.io/jb-loading/>  

## instructions

### install

#### using npm:
```cmd
npm i jb-loading
```

in one of your js in pages

```js
import 'jb-loading';

```

in your html or jsx

```html
<jb-loading ></jb-loading>
```

#### using cdn:

```html
    <script src="https://cdn.jsdelivr.net/npm/jb-loading/dist/JBLoading.umd.js"></script>
    <jb-loading></jb-loading>
```


### set custom style

in some cases in your project you need to change defualt style of web-component for example you need to change color.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component 
| css variable name                  | description                                                                                   |
| -------------                      | -------------                                                                                 |
| --jb-loading-color                 | loading color default is black `#000`                                                         |
| --jb-loading-width                 | loading width default `100%`                                                                  |
| --jb-loading-height                | loading height default is `100%`                                                              |