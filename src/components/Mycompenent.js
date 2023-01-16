import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://my-api.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </>
  );
}
export default MyComponent;