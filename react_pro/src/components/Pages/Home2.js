import React from 'react';
import {AuctionBody} from '../auctions/Body'
import NavComp from '../authentication/NavComp'
import { AuthProvider } from '../context/AuthContext';

export const home2 = () => {
  return (
    <AuthProvider>
      <NavComp />  
      <AuctionBody />     
    </AuthProvider>   
  );
};
export default home2;