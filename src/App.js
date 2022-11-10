import React from 'react';
import Mobile from './Components/Mobile';
import Desktop from './Components/Desktop';
import { useState } from 'react';


function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
    {width < breakpoint ? <Mobile/> : <Desktop /> }
    </>
  );
}

export default App;
