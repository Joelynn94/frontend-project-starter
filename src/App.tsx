import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './App.module.css';
import { Button } from './components/Button';
import { cn } from './design-system';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <div className={styles.logoContainer}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>
      <h1 className={styles.title}>Vite + React + TypeScript</h1>
      <div className={styles.card}>
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className={styles.buttonDemo}>
        <h2>Button Component Examples</h2>
        <div className={styles.buttonGroup}>
          <Button variant="primary" size="small">
            Small Primary
          </Button>
          <Button variant="primary" size="medium">
            Medium Primary
          </Button>
          <Button variant="primary" size="large">
            Large Primary
          </Button>
        </div>
        <div className={styles.buttonGroup}>
          <Button variant="secondary" size="small">
            Small Secondary
          </Button>
          <Button variant="secondary" size="medium">
            Medium Secondary
          </Button>
          <Button variant="secondary" size="large">
            Large Secondary
          </Button>
        </div>
        <div className={styles.buttonGroup}>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>

      {/* Design System Demo */}
      <div
        className={cn('mt-8', 'p-6')}
        style={{ border: '1px solid #646cff', borderRadius: '8px' }}
      >
        <h2 className="mb-4">Design System Demo</h2>
        <p className="mb-2">Using utility classes for spacing:</p>

        {/* Margin examples */}
        <div className="my-4">
          <h3 className="mb-2">Margin Utilities</h3>
          <div className="gap-2" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="m-2 p-2" style={{ border: '1px solid #888', background: '#333' }}>
              m-2
            </div>
            <div className="mx-4 p-2" style={{ border: '1px solid #888', background: '#333' }}>
              mx-4
            </div>
            <div className="my-2 p-2" style={{ border: '1px solid #888', background: '#333' }}>
              my-2
            </div>
          </div>
        </div>

        {/* Padding examples */}
        <div className="my-4">
          <h3 className="mb-2">Padding Utilities</h3>
          <div className="gap-2" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="p-4" style={{ border: '1px solid #888', background: '#333' }}>
              p-4
            </div>
            <div className="px-6 py-2" style={{ border: '1px solid #888', background: '#333' }}>
              px-6 py-2
            </div>
            <div className="pt-4 pb-2" style={{ border: '1px solid #888', background: '#333' }}>
              pt-4 pb-2
            </div>
          </div>
        </div>

        {/* Gap examples */}
        <div className="my-4">
          <h3 className="mb-2">Gap Utilities (Flexbox)</h3>
          <div className="gap-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="p-2" style={{ border: '1px solid #888', background: '#333' }}>
              Item 1
            </div>
            <div className="p-2" style={{ border: '1px solid #888', background: '#333' }}>
              Item 2
            </div>
            <div className="p-2" style={{ border: '1px solid #888', background: '#333' }}>
              Item 3
            </div>
          </div>
        </div>
      </div>

      <p className={cn(styles.readTheDocs, 'mt-6')}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
