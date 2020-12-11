import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../css/legend.css'

import '@polymer/paper-tooltip/paper-tooltip.js';



class Legend extends Component {


  

  render() {
    return (
      <div>

    <div className="legend">
      <div className="legend-title">Score Range</div>
      <div>
        <div className="range">
          <div className="positive">0.25 <span>—</span> 1.0</div>
          <div className="neutral">-0.25 <span>—</span> 0.25</div>
          <div className="negative">-1.0 <span>—</span> -0.25</div>
          <paper-tooltip>Score of the sentiment ranges from -1.0 (very negative) to 1.0 (very positive).</paper-tooltip>
        </div>
      </div>
    </div>

    </div>
        
    );
  }
}

export default Legend;