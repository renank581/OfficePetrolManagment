import React from "react"
import { useTranslation, withTranslation, Trans } from 'react-i18next';

 function NavBar({updateNav}){
    const { t, i18n } = useTranslation();
    return(
     
          <ul className="nav">
            <Navitem lavel={t('employee')} prakas={0} updateNav={updateNav}/>
            <Navitem lavel={t('petrol')} prakas={1} updateNav={updateNav}/>
           
          </ul>
             
       
       
    )
}
function Navitem({lavel,prakas,updateNav}){
    return(
    <li  className="nav-item " style={{cursor:"pointer"}}   onClick={()=>updateNav(prakas)}><span className="btn btn-primary ml-3">{lavel}</span></li>)
}
const NavBar1 = withTranslation()(NavBar);
export default NavBar1