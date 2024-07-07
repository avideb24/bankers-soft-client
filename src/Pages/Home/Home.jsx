import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import bannerImage from '../../../public/images/HomeBanner.jpg';
import InitialHeader from '../../components/Shared/InitialHeader/InitialHeader';

const Home = () => {
    const { t } = useTranslation();
    const lang = t('HomePage');
    const { Accounting, UsersRole, AccountsType, Customer, AdditionalFeatures } = lang;

    const FeatureItem = ({ item }) => {
        const { title, text1, text2, text3, text4, text5, text6, text7, text8 } = item;

        return (
            <div className="p-4 shadow-sm bg-white mb-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <ul className="list-disc ml-5 mt-2">
                    {text1 && <li>{text1}</li>}
                    {text2 && <li>{text2}</li>}
                    {text3 && <li>{text3}</li>}
                    {text4 && <li>{text4}</li>}
                    {text5 && <li>{text5}</li>}
                    {text6 && <li>{text6}</li>}
                    {text7 && <li>{text7}</li>}
                    {text8 && <li>{text8}</li>}
                </ul>
            </div>
        );
    };

    FeatureItem.propTypes = {
        item: PropTypes.shape({
            title: PropTypes.string,
            text1: PropTypes.string,
            text2: PropTypes.string,
            text3: PropTypes.string,
            text4: PropTypes.string,
            text5: PropTypes.string,
            text6: PropTypes.string,
            text7: PropTypes.string,
            text8: PropTypes.string,
        }),
    };

    return (
        <div>
            <InitialHeader />
            <div className="mx-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* banner image */}
                <div className="p-4 shadow-sm bg-white">
                    <h2 className="text-lg md:text-2xl font-bold">{lang.responsive}</h2>
                    <p className="border-b border-b-slate-300 pb-3 mb-5 mt-2">{lang.responsiveText}</p>
                    <img src={bannerImage} className="w-full object-contain" alt="Demo image - Responsive" />
                </div>

                {/* services */}
                <div className="bg-white p-5 shadow-sm h-max">
                    <h2 className="text-base md:text-lg font-bold">{lang.features}</h2>
                    <p className='pb-3 border-b border-b-slate-300 mb-5 mt-2'>{lang.featuresText}</p>

                    {/* features */}
                    <div className='grid grid-cols-2 gap-6'>
                        <FeatureItem item={Accounting} />
                        <FeatureItem item={UsersRole} />
                        <FeatureItem item={AccountsType} />
                        <FeatureItem item={Customer} />
                        <FeatureItem item={AdditionalFeatures} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
