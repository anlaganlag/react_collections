import { useState, Suspense } from 'react';
import ReactTooltip from 'react-tooltip';

import './App.css';
import Title from './components/Title';

import MapChart from './components/MapChart';

const App = () => {
  const [content, setContent] = useState(null);

  return (
    <div className="container">
      <Suspense fallback={<div>Fetching results...</div>}>
        <Suspense fallback={<>Loading...</>}>
          <Title />
        </Suspense>
        <MapChart setTooltipContent={setContent} />
      </Suspense>
      <ReactTooltip className="tooltip" textColor="#000" backgroundColor="#FFF">
        {content && (
          <>
            <p className="state">{content.name}</p>
            <p className="elect-total">{content.electTotal} 張選舉人票</p>
            <p className="eevp">
              {content.eevp}%{' 選票已統計'}
            </p>
            {content.winner && (
              <p className="winner-name">贏家: {content.winner.fullName}</p>
            )}
          </>
        )}
      </ReactTooltip>
    </div>
  );
};

export default App;
