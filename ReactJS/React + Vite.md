## React + Vite 사용하기

    npm create vite@latest my-react-app --template react
    // my-react-app은 프로젝트 폴더 이름입니다. 원하는 이름으로 변경할 수 있습니다.
    // --template react는 React 템플릿을 사용하겠다는 뜻입니다.

    cd my-react-app

### 의존성 설치

#### npm 사용 시
    npm install

#### yarn 사용 시
    yarn

#### pnpm 사용 시
    pnpm install


### 개발 서버 실행

#### npm 사용 시
    npm run dev

#### yarn 사용 시
    yarn dev

#### pnpm 사용 시
    pnpm dev


### Vite에서 js파일 쓰기

jsx를 기본적으로 쓴다.

그렇지만 페이지는 js, 컴포넌트는 jsx로 파일을 만드는데 js을 쓰는방법

.js 파일에서도 JSX를 처리하도록 Babel 설정을 추가해야 함


    npm install @vitejs/plugin-react

vite.config.js 파일로 이동

    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
    plugins: [react()],
    });