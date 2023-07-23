import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png';
import us from '../Images/US.png';
import logo2 from '../Images/logo2.png';

import 'font-awesome/css/font-awesome.min.css';
import {react,useEffect,useState,useContext} from'react';
import { createContext } from "react";
import { ProContext } from '../App';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import '../Style/MyStyle.css';
function NavBar() {

  const { onChange} = useContext(ProContext);

  const { t } = useTranslation();
   
 

  return (
    <Navbar expand="lg" className="bg-white py-1 p-0 position-fixed w-100 " style={{zIndex:10,top:0}}>
      <Container className="px-4">
        <Navbar.Brand href="/"><a href='/'><img src={logo}  style={{width:60}}/></a></Navbar.Brand>
    
        <Navbar.Toggle className="shadow-none border-0 p-3" id="newtoggle"><i className="fa fa-bars py-1 px-2 " style={{fontSize:22,color:'#491d4d',border:'2px solid #491d4d',borderRadius:5}}></i></Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" me-auto mb-2 mb-lg-0 mx-lg-auto">
            <Nav.Link href="/" className="me-3 mx-3 fw-bold " style={{color:'#491d4d'}}>{t('Home')}</Nav.Link>
            <Nav.Link href="#AboutUs" className="me-3 mx-3 fw-bold " style={{color:'#491d4d'}}>{t('AboutUS')}</Nav.Link>
      <Nav.Link href="#Services" className="me-3 mx-3 fw-bold" style={{color:'#491d4d'}}>{t('Services')}</Nav.Link>
      
            <Nav.Link href="#ContactUS" className="me-3 mx-3 fw-bold" style={{color:'#491d4d'}}>{t('ContactUs')}
            </Nav.Link>         
          </Nav>

<select class="form-select shadow-none "  name="language"  onChange={onChange}
      style={{fontSize:14,color:'#491d4d',border:'2px solid #491d4d',borderRadius:5,width:70}}>
          <option className='d-none' selected>{i18n.language.toUpperCase()}</option>
       <option value="en" className='' style={{fontSize:15}}>EN</option>

              <option value="ar" style={{fontSize:15}}>AR</option>
          </select>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;