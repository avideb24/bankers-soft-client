import { useState } from "react";


const LangChange = () => {

    const [showLangMenu, setShowLangMenu] = useState(false);

    const languages = ['en', 'bn'];


    // change language fn
    const handleChangeLang = lang => {
        console.log(lang);
        setShowLangMenu(false)
    }

    return (
        <div>
            <div className="relative">
                <button onClick={() => setShowLangMenu(!showLangMenu)} className="bg-green-600 text-white px-3 py-2 rounded-sm">Language</button>
                <div className="absolute z-50 flex flex-col bg-red-500 -left-2 -top-8">
                    {
                        languages.map(lang => 
                            <button key={lang} onClick={() => handleChangeLang(lang)} className={`${showLangMenu ? '' : 'hidden'} w-28 bg-slate-300 py-2 hover:bg-green-500 hover:text-white duration-200`}>{lang == 'en' ? 'English' : 'বাংলা'}</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default LangChange;