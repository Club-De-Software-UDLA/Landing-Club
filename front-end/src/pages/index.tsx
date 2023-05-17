import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import download from '../../public/download.png'
import image from '../../public/android.png'
import { Card } from '@nextui-org/react';
import PageCard from './Components/card'
import CardH from './Components/CardH'
import Footer from './Components/Footer'
import { useTheme, Text } from '@nextui-org/react';
import Nav from './Components/Navbar'
import { BsFacebook } from 'react-icons/bs';
import { FaAppStoreIos } from 'react-icons/fa';
import { BsAndroid2 } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import { BsPhone } from 'react-icons/bs';

//my-app/public/download.png

const inter = Inter({ subsets: ['latin'] })

export default function Home()  {
  const { theme } = useTheme();
  return (
  // <Navbar/>
  <>
   <Nav/>
    <div style={{ backgroundColor: "#8B0000", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
     
      <div style={{ color: "green"}}>
         <Text
        h1
        size={60}
        css={{
          color: "white",
        }}
        weight="bold"
      >
       Club 
      </Text>
      <Text
        h1
        size={60}
        css={{
          color: "white"
        }}
        weight="bold"
      >
          De
      </Text>
      <Text
        h1
        size={60}
        css={{
       
          color: "white"

        }}
        weight="bold"
      >
      Software
      </Text>

        <h2 style={{  color: "white"}}> UDLA </h2>
        <div> 
         
          <div>
            <PageCard />
          </div>
         </div>
         
         
         <br></br>

      
   
    


         
      </div>
      <Footer/>
    </div>

  </>
 
  )
}