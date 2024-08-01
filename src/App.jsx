import React, { useState } from 'react'
import { loadComponent } from '../public/loadComponent';
import './App.css'

let Apple;

try {
  Apple = React.lazy(
        loadComponent(
            'remote',
            'default',
            './Apple',
            `http://localhost:8888/remote.js`,
        ),
    );
} catch (error) {
    console.log('error', error);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div>下面是通过wepack ModuleFederationPlugin 加载过来的组件 apple</div>
      <div> ====== </div>
      <React.Suspense fallback={<>加载未完成</>}>
        <Apple />
      </React.Suspense>
    </>
  )
}

export default App
