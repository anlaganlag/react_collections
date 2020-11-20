import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle,originalTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>首頁</span>
      </Link>
      {movieTitle&&<span>| {movieTitle}</span>}
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string
};

export default BreadCrumb;
