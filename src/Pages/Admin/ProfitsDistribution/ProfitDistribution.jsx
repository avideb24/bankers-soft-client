import Header from "../../../components/Shared/Header/Header";


const ProfitsDistribution = () => {
    return (
        <div>
            <Header title="Pofit Distrubution" />

            <div className="bg-white m-4 p-5 shadow-sm">

                <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold mt-2">Sorry!</h3>
                    <p className="text-red-600">You have no business partner, so profit sharing is not possible.</p>
                </div>

            </div>

        </div>
    );
};

export default ProfitsDistribution;