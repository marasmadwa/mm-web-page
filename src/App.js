import React, { useState } from 'react';
import SectionNavigation from './components/section_navigaton';

function App() {
  const [number, setNumber] = useState(0);
return (
    <div className = "App">
      <SectionNavigation/>
    </div>
  );
}

export default App;
