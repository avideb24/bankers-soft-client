import { useState, useEffect } from 'react';
import i18n from 'i18next';

const useCurrentLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = (lang) => {
            setCurrentLanguage(lang);
        };

        i18n.on('languageChanged', handleLanguageChange);

        // Clean up the event listener when the component unmounts
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, []);
    

    return { currentLanguage, setCurrentLanguage };
};

export default useCurrentLanguage;
