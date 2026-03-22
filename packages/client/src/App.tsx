import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <p className="text-3xl font-bold p-4">{message}</p>
      <button>Click me</button>
    </div>
  );
}

export default App;
