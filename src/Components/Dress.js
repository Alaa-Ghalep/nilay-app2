import {React,useContext} from 'react'
import '../Style/MyStyle.css';
import imgdress1 from'../Images/imgdress1.png';
import imgdress2 from'../Images/imgdress2.png';
import imgdress3 from'../Images/imgdress3.png';
import imgdress4 from'../Images/imgdress4.png';
import imgdress5 from'../Images/imgdress5.png';
import { useTranslation } from 'react-i18next';

import { ProContext } from '../App';
import'../Style/MyStyle.css';

export default function Dress() {
  const { t } = useTranslation();

    const { setServicesShow,setDressShow } = useContext(ProContext);
    const HandDress=()=>{
        setDressShow(false);
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
                  >{t('WDresses')}</h1>  
             </div>
        <span><i className='fa fa-close text-white fs-4  position-absolute' id="closebutton"
         onClick={HandDress}
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
                      <img className='img-fluid w-100 h-100 rounded-img' src={imgdress1}/>
    
                      </div>
                        <div>
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>wedding favors</p>
                        </div>
                    </div>
                    </div>
      
                    <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgdress2}/>
                        </div>
                        <div>  
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>latest fashion</p>
                        </div>
    
                    </div>
                    </div>
                 
                 
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                    <div>    
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgdress3}/>
                    </div>   
                        <div>  
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Wedding Dress 
Alterations</p>
                        </div>
    
                    </div>
                    </div>
                  
                  
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgdress4}/>
                        </div>
                        <div>
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Wedding Dress Rental</p>
                        </div>
                    </div>
                    </div>
    
    
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2 mx-md-auto'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgdress5}/>
                        </div>
                      <div>
    
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolorr'>Wedding Dress Design</p>
    
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



