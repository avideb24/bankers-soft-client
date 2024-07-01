import Header from "../../../components/Shared/Header/Header";
import PropTypes from 'prop-types';
import { useState } from 'react';
import nidFrontImg from '../../../../public/images/documents/NID-Front.png';
import nidBackImg from '../../../../public/images/documents/NID-Back.png';
import birthCertificateImg from '../../../../public/images/documents/Birth-cetificate.png';
import documentImg from '../../../../public/images/documents/Document.png';
import { MdChangeCircle } from "react-icons/md";

const Title = ({ title }) => {
    return (
        <h2 className="text-center text-base md:text-lg font-bold pb-2 border-b border-b-slate-300 mb-5">
            {title}
        </h2>
    );
};

const CustomerDocuments = () => {
    const [nidFrontImage, setNidFrontImage] = useState(nidFrontImg);
    const [nidBackImage, setNidBackImage] = useState(nidBackImg);
    const [birthCertificateImage, setBirthCertificateImage] = useState(birthCertificateImg);
    const [otherDocumentImage, setOtherDocumentImage] = useState(documentImg);

    const handleImageChange = (e, setImage) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div>
            <Header title="Customer Documents" />

            <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {/* NID */}
                <div className="bg-white p-5 shadow-sm rounded-sm h-max">
                    <Title title={'NID Card'} />

                    <div>
                        <img src={nidFrontImage} className="w-full" alt="NID Front Image" />
                        <input
                            type="file"
                            id="nid-front-upload"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, setNidFrontImage)}
                        />
                        <button className="w-full bg-blue-600 text-white font-bold py-2 flex justify-center items-center gap-2 mt-3 mb-5" onClick={() => document.getElementById('nid-front-upload').click()}><MdChangeCircle />Change</button>
                    </div>

                    <div>
                        <img src={nidBackImage} className="w-full" alt="NID Front Image" />
                        <input
                            type="file"
                            id="nid-back-upload"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, setNidBackImage)}
                        />
                        <button className="w-full bg-blue-600 text-white font-bold py-2 flex justify-center items-center gap-2 mt-3" onClick={() => document.getElementById('nid-back-upload').click()}><MdChangeCircle />Change</button>
                    </div>

                </div>

                {/* Birth Certificate */}
                <div className="bg-white p-5 shadow-sm rounded-sm h-max">
                    <Title title={'Birth Certificate'} />
                    <div>
                        <img src={birthCertificateImage} className="w-full" alt="Birth Certificate Image" />
                        <input
                            type="file"
                            id="birth-certificate-upload"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, setBirthCertificateImage)}
                        />
                        <button onClick={() => document.getElementById('birth-certificate-upload').click()} className="w-full bg-blue-600 text-white font-bold py-2 flex justify-center items-center gap-2 mt-3" ><MdChangeCircle />Change</button>
                    </div>
                </div>

                {/* Other Document */}
                <div className="bg-white p-5 shadow-sm rounded-sm h-max">
                    <Title title={'Other Document'} />
                    <div>
                        <img src={otherDocumentImage} className="w-full" alt="Other Document Image" />
                        <input
                            type="file"
                            id="other-document-upload"
                            className="hidden"
                            onChange={(e) => handleImageChange(e, setOtherDocumentImage)}
                        />
                        <button onClick={() => document.getElementById('other-document-upload').click()} className="w-full bg-blue-600 text-white font-bold py-2 flex justify-center items-center gap-2 mt-3" ><MdChangeCircle />Change</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default CustomerDocuments;
