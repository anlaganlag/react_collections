import React from 'react';
import {SideBarItem} from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {Subscriptions} from './Subscriptions/Subscriptions';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';


export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem highlight={true} label='Home' icons='home'/>
        <SideBarItem label='Trending' icons='fire'/>
        <SideBarItem label='Followers' icons='spy'/>
        <Divider/>
        <SideBarItem label='History' icons='history'/>
        <SideBarItem label='Watch later' icons='clock'/>
        <SideBarItem label='Liked videos' icons='thumbs up'/>
        <Divider/>
        <Subscriptions/>
        <SideBarItem label='Movies and Shows' icons='film'/>
        <Divider/>
        <SideBarItem label='Report history' icons='flag'/>
        <SideBarItem label='Help' icons='help circle'/>
        <SideBarItem label='Send feedback' icons='comment'/>
        <Divider/>
        <SideBarItem label='Send feedback' icon='comment'/>
        <Divider/>
        <SideBarFooter/>
      </Menu>
    )
  }
}