import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './App.module.css';
import { Button } from './components/Button';

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
      <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
