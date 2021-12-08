import React from 'react'
import Footer from '../Footer/index'
import InfoSection from '../InfoSection'
import {homeObjTwo, homeObjThree } from '../InfoSection/Data'
import Services from '../Services'
import app from '../../config/fire'

const Home2 = () => {


    return (
        <>
    
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <button to ="/" onClick={() => app.auth().signOut()} >Sign Out ! </button>
            <Footer />
            
        </>
    )
}

export default Home2
