

const DpsElement = () => {
    return (
        <div className="py-4">
            <h2 className="text-lg md:text-xl font-bold pb-2 border-b border-b-slate-300">DPS Details</h2>

            {/* data table */}
            <div>
                <table className="w-full text-left">
                    <tbody>
                        {/* Dps Balance */}
                        <tr>
                            <th className="w-[30%]">Dps Balance</th>
                            <th>:</th>
                            <td><span className="text-base md:text-lg">৳</span>50000</td>
                        </tr>
                        {/*  Installments  */}
                        <tr>
                            <th className="w-[30%]"> Installments </th>
                            <th>:</th>
                            <td>14/20</td>
                        </tr>
                        {/* Monthly Amount  */}
                        <tr>
                            <th className="w-[30%]">Monthly Amount</th>
                            <th>:</th>
                            <td><span className="text-base md:text-lg">৳</span>2000</td>
                        </tr>
                        {/* Interest */}
                        <tr>
                            <th className="w-[30%]">Interest</th>
                            <th>:</th>
                            <td>10%</td>
                        </tr>
                        {/* Opening Date */}
                        <tr>
                            <th className="w-[30%]">Opening Date</th>
                            <th>:</th>
                            <td>24-06-2024</td>
                        </tr>
                        {/*Last Payment*/}
                        <tr>
                            <th className="w-[30%]">Last Payment</th>
                            <th>:</th>
                            <td>24-06-2024</td>
                        </tr>
                        {/* Next Date  */}
                        <tr>
                            <th className="w-[30%]">Next Date </th>
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