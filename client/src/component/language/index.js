import React from "react";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function Language(){
    const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    return (
        <div> 
            <div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight"> <button className="btn-primary btn btn-sm"   type="button" onClick={() => changeLanguage('en')}>En</button></div>
  <div class="p-2 bd-highlight"> <button className="btn-primary btn btn-sm"   type="button" onClick={() => changeLanguage('np')}>Ne</button></div>

</div>
           
           
        </div>
    )
    
}