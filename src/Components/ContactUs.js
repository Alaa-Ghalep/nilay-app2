import React from 'react'
import '../Style/MyStyle.css';
import { useTranslation } from 'react-i18next';
import insta from '../Images/insta.png';
import face from '../Images/face.png';
import twitter from '../Images/twitter.png';

export default function ContactUs() {
  const { t} = useTranslation();

  return (
    <div>
      <div className='container-fluid' id="ContactUS" style={{backgroundColor:'#491D4D66'}}>
        <div className='container pt-5 px-5'>
            <h2 className='text-center text-white mb-5 '
               data-aos='zoom-in'
               data-aos-duration="2000"
               data-aos-once="true">{t('ContactUs')}</h2>

            <div className='row'>
            <form    data-aos='fade-up'
              data-aos-duration="2000"
              data-aos-once="true">
            <div className='row g-4'>
            <div className='col-lg-6 col-xl-6 col-xxl-6'>
          <div className="left-inner-addon ">
            {/* <i className="fa fa-user" style={{fontSize:18}}></i> */}
            
            <input type="text"
                   className="form-control input" 
                   placeholder={t('name')}/>
        </div>
      
         
            </div>
            <div className='col-lg-6 col-xl-6 col-xxl-6'>
          <div className="left-inner-addon ">
            {/* <i className="fa fa-envelope"></i> */}
         
            <input type="email"
                   className="form-control input" 
                   placeholder={t('email')} />
        </div>
       
         
            </div>
          <div className=" ">

            {/* <i className='bx bxs-message ' style={{fontSize:18}}></i> */}
                   <textarea className='form-control px-2  textarea' 
                   placeholder={t('msg')}></textarea>
                   </div>
                   </div>

<div className='text-center mt-4 mb-4'
data-aos='fade-down'
data-aos-duration="2000"
data-aos-once="true"
>
                       <button className='btn text-center fw-bold  px-5 py-2'type='submit'
                        style={{borderRadius:10,backgroundColor:'#fff',color:'#491d4d'}}>{t('send')}</button>
                       </div>

               </form>
               
            </div>
        </div>
       
      </div>
{/* 
      <div className='container-fluid' style={{backgroundColor:'#491D4D'}}>
      <footer className='text-center py-4'>
            <div className="ms-3 d-flex" style={{justifyContent:'center'}}>
                        <a className="btn btn-sm-square btn-light rounded-circle text-center  ms-3 me-3" href="#">
            <i className='bx bxl-instagram-alt text-center mx-auto px-auto'
                 style={{color:'#491d4d',fontSize:30,}} ></i>
                   </a>
                  <a className="btn btn-sm-square btn-light rounded-circle text-center  ms-3 me-3" href="#">
                <i className="fa fa-linkedin" aria-hidden="true"  
                  style={{color:'#491d4d',fontSize:24,}} ></i></a>
                        <a className="btn btn-sm-square btn-light  rounded-circle text-center  ms-3 me-3" href="#">
                        <i className="fa fa-twitter" aria-hidden="true"  
                           style={{color:'#491d4d',fontSize:27,}}></i></a>
                        <a className="btn btn-sm-square btn-light  rounded-circle text-center  ms-3 me-3" href="#">
                        <i className="fa fa-facebook" aria-hidden="true"    
                         style={{color:'#491d4d',fontSize:24,}}></i></a>
                          
                    </div>

        </footer>
      </div> */}

{/* <div className='container-fluid' style={{backgroundColor:'#491D4D'}}>
      <footer className='text-center py-4'>
            <div className="ms-3 d-flex" style={{justifyContent:'center'}}>
                        <a className="btn btn-sm-square btn-light rounded-circle text-center  ms-3 me-3" href="#">
            <i className='bx bxl-instagram-alt text-center mx-auto px-auto'
                 style={{color:'#fff',fontSize:27,}} ></i>
                   </a>
                  <a className="btn btn-sm-square btn-light rounded-circle text-center  ms-3 me-3" href="#">
                <i className="fa fa-linkedin" aria-hidden="true"  
                  style={{color:'#fff',fontSize:21,}} ></i></a>
                        <a className="btn btn-sm-square btn-light  rounded-circle text-center  ms-3 me-3" href="#">
                        <i className="fa fa-twitter" aria-hidden="true"  
                           style={{color:'#fff',fontSize:23,}}></i></a>
                        <a className="btn btn-sm-square btn-light  rounded-circle text-center  ms-3 me-3" href="#">
                        <i className="fa fa-facebook" aria-hidden="true"    
                         style={{color:'#fff',fontSize:20,}}></i></a>
                          
                    </div>

        </footer>
      </div>
       */}
      <div className='container-fluid' style={{backgroundColor:'#fff'}}>
      <footer className='text-center py-2'>
            <div className="ms-3 d-md-flex" style={{justifyContent:'center',alignContent:'center',verticalAlign:'center'}}>
            <a className="text-decoration-none text-center mt-2 fw-bold  ms-3 me-3" href="#" style={{color:'#491d4d'}}>{t('footer')}
           </a>
            <div className='d-flex text-center justify-content-center  mt-1'>

           
            <a href='#' className='ms-2 me-2'><img src={insta} style={{width:28}}/></a>
            <a href='#' className='ms-2 me-2'><img src={face} style={{width:44}}/></a>
            <a href='#' className='ms-2 me-2'><img src={twitter} style={{width:38}}/></a>
            </div>
                    </div>

        </footer>
      </div>
    </div>
  )
}
