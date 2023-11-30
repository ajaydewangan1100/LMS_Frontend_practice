# LMS Frontend

### Used vite

[https://vitejs.dev/guide/](https://vitejs.dev/guide/)

```
    npm create vite@latest
```

### Setup instructions for tailwind

[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
    npm install -D tailwindcss
```

2. Create tailwind config file

```
    npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
    "./src/**/*.{html,js,jsx,ts,tsx}"

```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

- @reduxjs/toolkit (state management)

- react-redux (binding redux with react)

- react-router-dom (routing)

- react-icons (for icons)

- react-chartjs-2 (for chart)

- chart.js (dependency)

- daisyui (plugin for tailwind ui)(most popular component library for tailwindcss)

- axios (instead of fetch for network request)

- react-hot-toast (for toast notification)

- @tailwindcss/line-clamp (plugin multiline truncation)

### Eslint configuration - for auto sort the lines of code in which things imported

1. install

```
    npm i eslint-plugin-simple-import-sort
```

2.  add rule in [eslint.cjs](.eslintrc.cjs)

```
    "simple-import-sort/imports": "error"
```

3. add simple-import-sort plogun in [eslint.cjs](.eslintrc.cjs)

```
    plugins: [..., "simple-import-sort"],
```

4. To enable auto-import-save on file save - configure -> settings.json

```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

### Store created for state management

1. [Store.js](src/Redux/store.js)

2. 
