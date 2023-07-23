import {React,useContext} from 'react'
import imggrarph1 from'../Images/imggrarph1.png';
import imggrarph2 from'../Images/imggrarph2.png';
import imggrarph3 from'../Images/imggrarph3.png';
import imggrarph4 from'../Images/imggrarph4.png';
import imggrarph5 from'../Images/imggrarph5.png';
import { useTranslation } from 'react-i18next';

import { ProContext } from '../App';
import'../Style/MyStyle.css';

export default function Photography() {
  const { t } = useTranslation();

    const { setServicesShow,setPhotographyShow } = useContext(ProContext);
    const HandPhotography=()=>{
        setPhotographyShow(false);
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
                >{t('Photography')}</h1>  
           </div>
      <span><i className='fa fa-close text-white fs-4  position-absolute' id="closebutton"
       onClick={HandPhotography}
       style={{top:34}}></i></span>
            
          <div className='container'>
  
          <div className='row g-3 pb-5 '
           data-aos='fade-up'
           data-aos-duration="2000"
           data-aos-once="true">
            
              {/* <div className='col-md-1 col-lg-1 col-xl-1 col-xxl-1'></div> */}
          <div className='d-md-inline col-lg-1 col-xl-1 col-xxl-1'></div>
            
                 <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                  <div className='bg-white text-center rounded-div h-100'>
                    <div>
                    <img className='img-fluid w-100 h-100 rounded-img' src={imggrarph1}/>
  
                    </div>
                      <div>  
                      <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Fashion Photography</p>
                      </div>
                  </div>
                  </div>
    
                  <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                  <div className='bg-white text-center rounded-div h-100'>
                    <div>
                      <img className='img-fluid w-100 h-100 rounded-img' src={imggrarph2}/>
                      </div>
                      <div>
  
                      <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Commercial Photography</p>
                      </div>
  
                  </div>
                  </div>
               
               
                 <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                  <div className='bg-white text-center rounded-div h-100'>
                  <div> 
                      <img className='img-fluid w-100 h-100 rounded-img' src={imggrarph3}/>
                  </div> 
                      <div>
                      <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Event Photography</p>

                      </div> 
                  </div>
                  </div>
                
                
                 <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                  <div className='bg-white text-center rounded-div h-100'>
                    <div>
                      <img className='img-fluid w-100 h-100 rounded-img' src={imggrarph4}/>
                      </div>
                      <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Wedding Photography</p>

                      <div>
                      </div>
                  </div>
                  </div>
  
  
                 <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2 mx-md-auto'>
                  <div className='bg-white text-center rounded-div h-100'>
                    <div>
                      <img className='img-fluid w-100 h-100 rounded-img' src={imggrarph5}/>
                      </div>
                    <div>
                      <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Portrait Photography</p>
  
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
