import React, { Component } from 'react'
import AbouteUs from './AbouteUs'
import ContactUs from './ContactUs'
import ParentComp from './ParentComp'

import NavBar from './NavBar'
import Card from './Card'
import SliderComp from './SliderComp'
export default class Index extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SliderComp/>
        <Card/>
      <AbouteUs/>
      <ParentComp/>
      <ContactUs/>
      </div>
    )
  }
}
