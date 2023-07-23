import {React,useContext} from 'react'
import '../Style/MyStyle.css';
import imghall1 from'../Images/imghall1.png';
import imghall2 from'../Images/imghall2.png';
import imghall3 from'../Images/imghall3.png';
import imghall4 from'../Images/imghall4.png';
import imghall5 from'../Images/imghall5.png';
import { useTranslation } from 'react-i18next';

import { ProContext } from '../App';
import'../Style/MyStyle.css';

export default function Halls() {
  const { t } = useTranslation();

    const { setServicesShow,setHallsShow } = useContext(ProContext);
    const HandHalls=()=>{
      setHallsShow(false);
      setServicesShow(true);
    }
    return (
        <div>
          <div className='container-fluid position-relative' id="storecontainer"
                data-aos='fade-dwon'
                data-aos-duration="2000"
                data-aos-once="true">
                  <div className='mb-4'>
    
             
                  <h1 className='text-center text-white pt-4 ' 
                  data-aos='zoom-in'
                  data-aos-duration="2000"
                  data-aos-once="true"
                  >{t('whalls')}</h1>  
             </div>
        <span><i className='fa fa-close text-white fs-4  position-absolute' id="closebutton"
         onClick={HandHalls}
         style={{top:34}}></i></span>
              
            <div className='container'>
    
            <div className='row g-3 pb-5 '
             data-aos='fade-up'
             data-aos-duration="2000"
             data-aos-once="true">
              
              <div className='d-md-inline col-lg-1 col-xl-1 col-xxl-1'></div>
              
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                      <img className='img-fluid w-100 h-100 rounded-img' src={imghall1}/>   
                      </div>
                        <div>
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Parking Facilities</p>
                        </div>
                    </div>
                    </div>
    
    
                    <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imghall2}/>
                        </div>
                        <div>
    
              <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Audiovisual and Lighting Equipment</p>

                        </div>
    
                    </div>
                    </div>
                 
                 
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                    <div>
    
                        <img className='img-fluid w-100 h-100 rounded-img' src={imghall3}/>
                    </div>
    
                        <div>
    
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Catering Services</p>
                        </div>
    
                    </div>
                    </div>
                  
                  
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imghall4}/>
                        </div>
                        <div>
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Wedding Dress Rental</p>
                        </div>
                    </div>
                    </div>
    
    
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2 mx-md-auto'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imghall5}/>
                        </div>
                      <div>
    
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Venue Rental</p>
    
    </div>
    
    
                    </div>
                    </div>
    
                    <div className='d-md-inline col-lg-1 col-xl-1 col-xxl-1'></div>
    
              
                    
                </div>
            </div>
          </div>
    
        </div>
      )
  }



