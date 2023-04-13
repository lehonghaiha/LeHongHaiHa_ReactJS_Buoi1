import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './style.css';

export default class BaiTapThucHanhLayOut extends Component {
  render() {
    return (
      <div>
            <Header/>
            <Body/>
            <Footer/>
      </div>
    )
  }
}

