import React from 'react'
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import { useTranslation } from 'react-i18next';

export default function Card() {
  const { t} = useTranslation();

  return (
    <div>
      <div className='container-fluid bookservices' >
    <div className='container '  id="">
<div className='row g-3 px-5  ' 
  data-aos='fade-up'
  data-aos-duration="2000"
  data-aos-once="true"
>
<div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
  <div className='bg-white text-center h-100  shadow-sm' style={{borderRadius:40}}>
    <img className='imgg  pt-4' src={img1}/>
    <p className='fw-bold mt-2'>{t('hqp')}</p>
    <p  className='mt-2 pb-3'>{t('Bps')}</p>
  </div>
</div>

<div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
  <div className='bg-white text-center  h-100  shadow-sm' style={{borderRadius:40}}>
    <img className=' imgg pt-4' src={img2}/>
    <p className='fw-bold mt-2'>{t('Reg')}</p>
    <p  className='mt-2 pb-3'>{t('youcan')}</p>
  </div>
</div>

<div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
  <div className='bg-white text-center h-100 px-md-2 shadow-sm' style={{borderRadius:40}}>
    <img className='imgg  pt-4' src={img3}/>
    <p className='fw-bold mt-2'>{t('BS')}</p>
    <p  className='mt-2 pb-3'>{t('youcan2')}</p>
  </div>
</div>
</div>
</div>
   </div>
    </div>
  )
}
