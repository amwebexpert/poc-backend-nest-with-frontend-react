import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <Header title="hola" />
      <Logo height={100} width={100} />
      <Button onClick={() => alert('hola')}>Heyo</Button>
    </div>
  );
}

export default App;
