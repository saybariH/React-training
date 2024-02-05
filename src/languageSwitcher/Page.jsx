import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Page(){
    const [currentLang, setCurrentLang] = useState('AR')

    const displayMessage = () => {
        switch(currentLang){
            case 'AR': return  'arabic is heeere !'
            
            case 'FR': return  'French is heeere !'
            
            case 'EN': return  ' English is heeere !'
             
        }
    }
    return <>
    
    <LanguageSwitcher onLanguageChange={(lang) => setCurrentLang(lang)} />
    <hr/>
    current language : {currentLang}
    <hr/>

    <div className="alert alert-primary" role="alert">
    <strong>{displayMessage()}</strong>
    </div>

    </>
}