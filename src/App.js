import './App.css';
import i18n from 'i18next';
import {react,useEffect,useState,Suspense} from'react';
import Index from './Components/Index';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import './Style/Cursorstyle.css';
import { createContext } from "react";
import { useTranslation } from 'react-i18next';

export const ProContext = createContext();

export default function App() {
  const[ServicesShow,setServicesShow]=useState(true);
  const[StoreShow,setStoreShow]=useState(false);
  const[PhotographyShow,setPhotographyShow]=useState(false);
  const[DressShow,setDressShow]=useState(false);
  const[HallsShow,setHallsShow]=useState(false);
  const[BeautyShow,setBeautyShow]=useState(false);
  const { t ,i18n} = useTranslation();

  // const[lng,setlng]=useState(true);
  // const[lng1,setlng1]=useState(true);
  // const[lng2,setlng2]=useState(true);

  


  const[lng,setlng]=useState(true);
  const[lng1,setlng1]=useState(true);
  const[lng2,setlng2]=useState(false);
  const onChange=(event)=>{
    i18n.changeLanguage(event.target.value);
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  
    console.log(event.target.value);
  }
  const onClick=()=>{
    console.log(lng);
    if(lng){
    i18n.changeLanguage('en');
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    console.log("Languageeee: "+i18n.language);
    setlng(false);
    }
    else{
    i18n.changeLanguage('ar');
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    setlng(true);
    
    }
    
    }

  
     
  useEffect(() => {
    AOS.init();
    // const dir = i18n.dir(i18n.language);
    // document.documentElement.dir = dir; 
      const dir = i18n.dir(i18n.language);
    {i18n.language==="ar"&&(
       
    document.documentElement.dir = dir
  )}
 const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
      cursor.classList.remove("expand");
  }, 500)
})
  }, [])

  return (
    <Suspense fallback={'Loding...'}>

      <ProContext.Provider value={{ 
        ServicesShow,setServicesShow,
        StoreShow,setStoreShow,
        PhotographyShow, setPhotographyShow,
        DressShow,setDressShow,
        HallsShow,setHallsShow,
        BeautyShow,setBeautyShow,
        onChange,
   
        lng1,lng2
        }}>

    <div>
      <div className='cursor'></div>
     
<Index/>
</div>
      </ProContext.Provider>
</Suspense>
  
  )
  
}


