import React from "react";
import {Link} from "react-router-dom";

const Header = props => {
  return (
    <header style={styles.headerStyle}>
        <h1>TodoList</h1>
        <Link style={styles.linkStyles} to="/">Home</Link> |  <Link style={styles.linkStyles} to="/about">About</Link>
    </header>
  )
};

const styles = {
    headerStyle: {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    },
    linkStyles: {
        color: '#fff'
    }
};

export default Header
