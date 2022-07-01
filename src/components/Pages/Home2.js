import React, {useState, useEffect} from 'react';
import {AuctionBody} from '../auctions/Body'
import NavComp from '../authentication/NavComp'
import Crossfade from '../Carousel/crossfade';
import { AuthProvider } from '../context/AuthContext';
import Footer from '../Footer/index'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import '../Pages/Home2.css'
//import ImageSlider from '../Carousel/ImageSlider';
//import { SliderData } from '../Carousel/SliderData';

function Home2() {

  const  [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])


  return (
    <>
    {
      loading ?
      <div>
      <div className='loading'>
      <ClimbingBoxLoader color={"#fff"} loading={loading} size={25} />
      
      </div>
      
      </div>
      :

      <AuthProvider>
      <NavComp />  
      <Crossfade/>
      <AuctionBody />    
      <Footer /> 
    </AuthProvider>
    }
    </>
  );
}
export default Home2;