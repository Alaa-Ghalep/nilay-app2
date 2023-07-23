import React from 'react'
import logo from '../Images/logo.png';
import { useTranslation } from 'react-i18next';
export default function AbouteUs() {
  const { t } = useTranslation();

  return (
    <div>
      <div className='container-fluid' id="AboutUs">
        <div className='container'>
          <div className='row text-center mx-5'>
          <h3 className='' style={{color:'#491D4D'}}>{t('AboutUS')}</h3>
          <div className='col-lg-1'></div>
          <div className='col-lg-10'> <div className=''>
  <p>{t('Napp')}</p>

  </div></div>
          <div className='col-lg-1'></div>


          </div>
      
            {/* <div className='row g-5'>
                <div className='col-md-6 col-lg-8 col-xl-8 col-xxl-8'>
                    <div 
                      data-aos='fade-up'
                      data-aos-duration="2000"
                      data-aos-once="true">
                        <h3 className='' style={{color:'#491D4D'}}>{t('AboutUS')}</h3>
                        <p>{t('Napp')}</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-4 xol-xxl-4'>
                    <div className='text-center' 
                        data-aos='zoom-in'
                        data-aos-duration="2000"
                        data-aos-once="true">
                        <img className='img-fluid  text-center'
                          src={logo}
                          style={{width:202}}/>
                    </div>
                </div>
            </div>
       
        */}
       
        </div>
      </div>
    </div>
  )
}
