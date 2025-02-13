import React from 'react'
import Header from "../includes/Header";
import Spotlight from "./Spotlight";
import Arrival from "./Arrival";
import Explore from "./Explore";
import MiniSpotlight from "./MiniSpotlight";
import Men from "./Men";
import Women from './Women';
import Limelight from './Limelight';
import Brands from './Brands';


export default function Main() {
  return (
    <>
      <Header />
      <Spotlight />
      <Explore />
      <Arrival />
      <MiniSpotlight />
      <Men />
      <Women />
      <Brands />
      <Limelight />
    </>  
  )
}
