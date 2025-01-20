## Vite에서 Tailwind 적용하기

[공식문서 (Vite + Tailwind)](https://tailwindcss.com/docs/guides/vite)

### Tailwind Play로 연습하기

[Tailwind Play](https://play.tailwindcss.com/)


### Vite 프로젝트 설치

    npm create vite@latest my-project -- --template react


    cd my-project
    
### Tailwind CSS 설치

    npm install -D tailwindcss postcss autoprefixer
    
    npx tailwindcss init -p

### 적용


#### tailwind.config.js
    
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

#### index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;


### test

    export default function App() {
      return (
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      )
    }