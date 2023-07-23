import {React,useEffect,Component,useContext,useState} from 'react'
import '../Style/MyStyle.css';
import clean from '../Images/clean.png';
import hall from '../Images/hall.png';
import dress from '../Images/dress.png';
import photography from '../Images/photography.png';
import beauty from '../Images/beauty.png';
import Stores from './Stores';
import { ProContext } from '../App';
import { useTranslation } from 'react-i18next';

export default function Services2() {
  const { t } = useTranslation();

  const {setServicesShow,setStoreShow,
    setPhotographyShow,setDressShow,
    setHallsShow,setBeautyShow } = useContext(ProContext);
  const HandStores=()=>{
    setStoreShow(true);
    setServicesShow(false);
  }
  const HandPhotography=()=>{
    setPhotographyShow(true);
    setServicesShow(false);
  }
  const HandDress=()=>{
    setDressShow(true);
    setServicesShow(false);
  }

  const HandHalls=()=>{
    setHallsShow(true);
    setServicesShow(false);
  }
  const HandBeauty=()=>{
    setBeautyShow(true);
    setServicesShow(false);
  }

  
  return (
    <div>
      <div className='container-fluid parentServeces'id="Services" >
        <div className='mb-5'>

      
      <h1 className='text-center text-white pt-4 ' 
              data-aos='zoom-in'
              data-aos-duration="2000"
              data-aos-once="true"
              >{t('Services')}</h1>
                </div>
        <div className='container pb-5 d-block'id="parentcontainer">
           
            <div className='row g-3 mb-5 pb-5 '
                                  data-aos='fade-up'
                                  data-aos-duration="2000"
                                  data-aos-once="true">
            <div className='col-md-1 col-lg-1 col-xl-1 col-xxl-1'></div>

                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2' id="Beauty"
                onClick={HandBeauty}>
                    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}
>
                        <img className='imgServices pt-3 mb-3'  src={clean}/>
                        <p className='fw-bold pb-2' style={{color:'#491D4D'}}>{t('Bsalons')}</p>
                    </div>
                </div>
              
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'
                onClick={HandHalls}>
                    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}
>
                        <img className='imgServices pt-3 mb-3'  src={hall}/>
                        <p className='fw-bold pb-2' style={{color:'#491D4D'}}>{t('whalls')}</p>
                    </div>
                </div>
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'
                onClick={HandDress}>
  <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}>       
                        <img className='imgServices pt-3 mb-3'  src={dress}/>
                        <p className='fw-bold pb-2 mb-3' style={{color:'#491D4D'}}>{t('WDresses')}</p>
                    </div>
                </div>
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'
                onClick={HandPhotography}>
              <div className='bg-white text-center px-3   h-100' style={{borderRadius:22}}>

                        <img className='imgServices pt-3 mb-3'  src={photography}/>
                        <p className='fw-bold pb-2 fontsize' style={{color:'#491D4D'}}>{t('Photography')}</p>
                    </div>
                </div>
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-block' id="store" 
          onClick={HandStores}
          >

    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}>


                        <img className='imgServices pt-3 mb-3'  src={beauty}/>
                        <p className='fw-bold pb-2' style={{color:'#491D4D'}}>{t('Stores')}</p>
                    </div>
                </div>
              
             
                <div className='col-md-1 col-lg-1 col-xl-1 col-xxl-1'>
</div>
            </div>
        </div>
      </div>
    </div>
  )
}


