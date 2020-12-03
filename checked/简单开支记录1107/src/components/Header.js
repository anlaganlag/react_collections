import React from 'react';
import { Jumbotron } from 'reactstrap';
import Logo from '../logo.svg';
import {useCTX} from '../GlobalState'

export default function Headers() {
  const [s,d,totalTime] = useCTX()
  console.log(totalTime,"totalTime..........");
  return (
    <Jumbotron fluid>
      <h1 className="display-6">工时统计
      </h1>
    </Jumbotron>
  );
}
