'use client'
import { useEffect, useState } from 'react';

export default function ClientSideComponent() {
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    // This code only runs in the browser after component mounts
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div>
      {/* Use windowWidth here */}
    </div>
  );
}