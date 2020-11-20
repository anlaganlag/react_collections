import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' active>做个汉堡吧</NavigationItem>
            <NavigationItem link='/'>买单</NavigationItem>
            
        </ul>)
}

export default navigationItems
