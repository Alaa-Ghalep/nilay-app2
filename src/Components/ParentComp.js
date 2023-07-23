import {React,useContext} from 'react'
import '../Style/MyStyle.css';
import { ProContext } from '../App';
import Services from './Services';
import Stores from './Stores';
import Photography from './Photography';
import Dress from './Dress';
import Halls from './Halls';
import Beauty from './Beauty';

export default function ParentComp() {
  const { ServicesShow, StoreShow,PhotographyShow,DressShow,HallsShow,BeautyShow } = useContext(ProContext);

  return (
    <div>
        <div className='container-fluid parentServeces'id="Services" >
      <div className='container'>
      {ServicesShow&&<Services/>}
      {StoreShow&&<Stores/>}
      {PhotographyShow&&<Photography/>}
      {DressShow&&<Dress/>}
      {HallsShow&&<Halls/>}
      {BeautyShow&&<Beauty/>}





      </div>
    </div>
    </div>

  )
}
