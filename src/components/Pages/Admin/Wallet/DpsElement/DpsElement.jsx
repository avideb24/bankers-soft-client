import { useTranslation } from "react-i18next";


const DpsElement = () => {

    // translation -----------
    const {t} = useTranslation();
    const lang = t('Wallet').Shared;
    // -----------------------

    return (
        <div className="py-4">
            <h2 className="text-lg md:text-xl font-bold pb-2 border-b border-b-slate-300">{lang.dpsDetails}</h2>

            {/* data table */}
            <div>
                <table className="w-full text-left">
                    <tbody>
                        {/* Dps Balance */}
                        <tr>
                            <th className="w-[30%]">{lang.amount}</th>
                            <th>:</th>
                            <td><span className="text-base md:text-lg">৳</span>50000</td>
                        </tr>
                        {/*  Installments  */}
                        <tr>
                            <th className="w-[30%]">{lang.installments} </th>
                            <th>:</th>
                            <td>14/20</td>
                        </tr>
                        {/* Monthly Amount  */}
                        <tr>
                            <th className="w-[30%]">{lang.monthlyAmount}</th>
                            <th>:</th>
                            <td><span className="text-base md:text-lg">৳</span>2000</td>
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
                        {/*Last Payment*/}
                        <tr>
                            <th className="w-[30%]">{lang.lastPayment}</th>
                            <th>:</th>
                            <td>24-06-2024</td>
                        </tr>
                        {/* Next Date  */}
                        <tr>
                            <th className="w-[30%]">{lang.nextDate}</th>
                            <th>:</th>
                            <td>29-07-2024</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DpsElement;