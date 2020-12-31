import React from 'react';
import { Jumbotron } from 'reactstrap';
import Logo from '../logo.svg';

export default function Headers() {
  return (
    <Jumbotron fluid>
      <h1 className="display-6">工时统计<img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
      </h1>
    </Jumbotron>
  );
}
