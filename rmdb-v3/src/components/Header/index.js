import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoImg,LogoChineseImg} from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
        {/* <LogoChineseImg src="https://s1.ax1x.com/2020/10/21/B9XFMj.png" alt='rmdb-logo' /> */}
      <LogoChineseImg src="https://img-blog.csdnimg.cn/20201021123453662.png" alt='filmChinese-logo' />

      </Link>
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />

    </Content>
  </Wrapper>
);

export default Header;
