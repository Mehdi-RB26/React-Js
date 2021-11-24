import React, {useState} from 'react'
import HeroSection from '../HeroSection'
import Navbar from '../navbar/Navbar'

const Home = () => {

/*const[isOpen, setIsOpen] = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}*/

    return (
        <>
        
            <Navbar />
            <HeroSection />
            
        </>
    )
}

export default Home
