import {React,useEffect,Component,useContext} from 'react'
import imgstore1 from'../Images/imgstore1.png';
import imgstore2 from'../Images/imgstore2.png';
import imgstore3 from'../Images/imgstore3.png';
import imgstore4 from'../Images/imgstore4.png';
import imgstore5 from'../Images/imgstore5.png';
import { ProContext } from '../App';
import'../Style/MyStyle.css';
import { useTranslation } from 'react-i18next';

export default function Stores() {
  const { t } = useTranslation();

  const { setServicesShow,setStoreShow } = useContext(ProContext);
  const HandStores=()=>{
    setStoreShow(false);
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
              >{t('Stores')}</h1>  
         </div>
    <span><i className='fa fa-close text-white fs-4  position-absolute' id="closebutton"
     onClick={HandStores}
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
             <img className='img-fluid  w-100 h-100 rounded-img' src={imgstore1}/>
             </div>
               <div>
               <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Loyalty Programs and Discounts</p>
               </div>
           </div>
           </div>


           <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
           <div className='bg-white text-center rounded-div h-100'>
             <div>
               <img className='img-fluid w-100 h-100 rounded-img' src={imgstore2}/>
               </div>
               <div>

               <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Customer Support</p>
               </div>

           </div>
           </div>
        
        
          <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
           <div className='bg-white text-center rounded-div h-100'>
           <div>
               <img className='img-fluid w-100 h-100 rounded-img' src={imgstore3}/>
           </div>
               <div>
               <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Secure Online Payments</p>
               </div>

           </div>
           </div>
         
         
          <div className='col-md-6 col-lg-2 col-xl-2 col-xxl-2'>
           <div className='bg-white text-center rounded-div h-100'>
             <div>
               <img className='img-fluid w-100 h-100 rounded-img' src={imgstore4}/>
               </div>
               <div>
               <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Product Descriptions and Reviews</p>
               </div>
           </div>
           </div>


          <div className='col-md-6  col-lg-2 col-xl-2 col-xxl-2 mx-md-auto'>
           <div className='bg-white text-center rounded-div h-100'>
             <div>
               <img className='img-fluid w-100 h-100 rounded-img' src={imgstore5}/>
               </div>
             <div>
               <p className='py-3 py-lg-1 py-sm-4 py-md-4 px-2 txtcolor'>Product Selection and Browsings</p>

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


