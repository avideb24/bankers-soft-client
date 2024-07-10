import { useTranslation } from "react-i18next";


const FixedDepositElement = () => {

     // translation -----------
     const {t} = useTranslation();
     const lang = t('Wallet').Shared;
     // -----------------------

    return (
        <div className="py-4">
            <h2 className="text-lg md:text-xl font-bold pb-2 border-b border-b-slate-300">{lang.fixedDepositDetails}</h2>

            {/* data table */}
            <div>
                <table className="w-full text-left">
                    <tbody>
                        {/* Fixed Deposit  */}
                        <tr>
                            <th className="w-[30%]">{lang.amount}</th>
                            <th>:</th>
                            <td><span className="text-base md:text-lg">৳</span>50000</td>
                        </tr>
                        {/* duration */}
                        <tr>
                            <th className="w-[30%]">{lang.duration}</th>
                            <th>:</th>
                            <td>30 Week</td>
                        </tr>
                        {/* Interest */}
                        <tr>
                            <th className="w-[30%]">{lang.interest}</th>
                            <th>:</th>
                            <td>10%</td>
                        </tr>
                        {/* Opening Date */}
                        <tr>
                            <th className="w-[30%]">{lang.openingDate}</th>
                            <th>:</th>
                            <td>24-06-2024</td>
                        </tr>
                        {/* Has crossed */}
                        <tr>
                            <th className="w-[30%]">{lang.hascrossed}</th>
                            <th>:</th>
                            <td>0 month</td>
                        </tr>
                        {/* Expired */}
                        <tr>
                            <th className="w-[30%]">{lang.expired}</th>
                            <th>:</th>
                            <td>29-06-2024</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default FixedDepositElement;