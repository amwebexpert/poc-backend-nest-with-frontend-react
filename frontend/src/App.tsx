import { useEffect, useState } from 'react';
import { Echo } from "./domain/echo";

function App() {
  const [data, setData] = useState<Echo>();

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="App">
      <div>message: <strong>{data?.message}</strong></div>
      <div>timestamp: <strong>{data?.timestamp}</strong></div>
    </div>
  );
}

export default App;
