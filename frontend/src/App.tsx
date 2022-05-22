import { useEffect, useState } from 'react';
import Default from './Components/Default';

interface BilletData {
  title: string;
  subtitle: string;
  body: string;
}

function App() {
  return (
    <div className="App">
      <Default/>
    </div>
  );
}

export default App;
