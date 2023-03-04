import React from "react";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
  function Button({id,onAddClick}){
    const { t, i18n } = useTranslation();
    return <button  className=" btn btn-primary" type="button" onClick={()=>onAddClick()}>{id ? t("update"):t("add") }</button>
}
const Button1 = withTranslation()(Button);
export default Button1