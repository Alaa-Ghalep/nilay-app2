import {React,useContext} from 'react'
import '../Style/MyStyle.css';
import imgstore5 from'../Images/imgstore5.png';
import { ProContext } from '../App';
import'../Style/MyStyle.css';
import { useTranslation } from 'react-i18next';
export default function Beauty() {
  const { t} = useTranslation();

    const { setServicesShow,setBeautyShow } = useContext(ProContext);
    const HandBeauty=()=>{
        setBeautyShow(false);
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
                  >{t('Beautysalons')}</h1>  
             </div>
        <span><i className='fa fa-close text-white fs-4  position-absolute' id="closebutton"
         onClick={HandBeauty}
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
                      <img className='img-fluid w-100 h-100 rounded-img' src={imgstore5}/>    
                      </div>
                        <div>
                <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Nail Extensions and Enhancements</p>

                        </div>
                    </div>
                    </div>
        
                    <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgstore5}/>
                        </div>
                        <div>
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Skin Care Treatments</p>
                        </div>
    
                    </div>
                    </div>
                 
                 
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                    <div> 
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgstore5}/>
                    </div>   
                        <div> 
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Hair Treatments</p>
                        </div>
    
                    </div>
                    </div>
                  
                  
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgstore5}/>
                        </div>
                        <div>
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Hair Coloring and Highlights</p>

                        </div>
                    </div>
                    </div>
    
    
                   <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2 mx-md-auto'>
                    <div className='bg-white text-center rounded-div h-100'>
                      <div>
                        <img className='img-fluid w-100 h-100 rounded-img' src={imgstore5}/>
                        </div>
                      <div>
    
                        <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Haircuts and Styling</p>
    
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



