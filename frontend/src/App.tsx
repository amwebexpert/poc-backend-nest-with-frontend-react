import { useEffect, useState } from 'react';
import { Echo } from './domain/echo';

function App() {
  const [data, setData] = useState<Echo>();

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-4">

      <div>
        message: <strong>{data?.message}</strong> server timestamp: <strong>{data?.timestamp}</strong>
      </div>

      <ul>
      <li><a className='underline cursor-pointer' href="/api/download/buffer">Example of [icon.png] file download 1 (buffer)</a></li>
      <li><a className='underline cursor-pointer' href="/api/download/stream">Example of [icon.png] file download 2 (stream)</a></li>
      <li><a className='underline cursor-pointer' href="/api/download/streamable">Example of [package.json] file download</a></li>
      </ul>
      
    </div>
  );
}

export default App;
