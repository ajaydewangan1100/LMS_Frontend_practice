# LMS Frontend - [LMS App](https://youtube-clone-khaki-seven.vercel.app/)

### Used vite

[https://vitejs.dev/guide/](https://vitejs.dev/guide/)

```
    npm create vite@latest
```

### Setup instructions for tailwind

[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss and supported library

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file

```
    npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"

```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Add the following details in plugin property of [tailwind.config.js](tailwind.config.js)

```
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
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

### setup - Toaster

1. import and run `<Toaster />` as component just after `<App />` - [src/main.jsx](src/main.jsx)

### Store created for state management

1. [Store.js](src/Redux/store.js)

2. [AuthSlice.js](src/Redux/Slices/AuthSlice.js)

3. provide store to Provider - [main.jsx](src/main.jsx)

### axios instance

1. [axiosInstance](src/Helpers/axiosInstance.js)

### Start creating components

1. Footer - [Footer](src/Components/Footer.jsx)

2. Layout - (for common or different layout ) -
