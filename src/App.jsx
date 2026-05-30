import { useState } from 'react';
import SectorSelection from './components/SectorSelection';
import Slideshow from './components/Slideshow';

export default function App() {
  const [view, setView] = useState('selection'); // 'selection' | 'slideshow'
  const [selectedSectors, setSelectedSectors] = useState([]);

  const handleStart = (sectors) => {
    setSelectedSectors(sectors);
    setView('slideshow');
  };

  const handleExit = () => {
    setView('selection');
    setSelectedSectors([]);
  };

  return (
    <>
      {view === 'selection' && <SectorSelection onStart={handleStart} />}
      {view === 'slideshow' && (
        <Slideshow sectors={selectedSectors} onExit={handleExit} />
      )}
    </>
  );
}
