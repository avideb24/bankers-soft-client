import { useState } from "react";
import Header from "../../../../components/Shared/Header/Header";
import { FaPlusCircle } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";


const AddUser = () => {

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };



    return (
        <div className="">

            <div className="bg-white p-3 m-4">
                <Header title="New User" />

                <div>
                    <h2 className="text-base font-bold flex items-center gap-2 pb-3 border-b-2 border-b-slate-200 pt-6"><FaPlusCircle /> Add Your User</h2>
                </div>

                <form className="flex gap-4 pt-3">
                    <div className="w-10/12 space-y-4">
                        {/* 1st row */}
                        <div className="w-full grid grid-cols-4 gap-2">
                            <div>
                                <label htmlFor="nameEn" className="font-bold">Your Name(English)</label>
                                <input type="text" name="nameEn" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="nameEn" />
                            </div>
                            <div>
                                <label htmlFor="nameBn" className="font-bold">Your Name(Bangla)</label>
                                <input type="text" name="nameBn" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="nameBn" />
                            </div>
                            <div>
                                <label htmlFor="date" className="font-bold">Date Of Birth</label>
                                <input type="date" name="birthdate" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="date" />
                            </div>
                            <div>
                                <label htmlFor="gender" className="font-bold">Gender</label>
                                <select name="" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="gender" defaultValue={'df'}>
                                    <option value="df">Choose One</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>

                        {/* 2nd row */}
                        <div className="w-full grid grid-cols-4 gap-2">
                            <div>
                                <label htmlFor="fatherName" className="font-bold">Father</label>
                                <input type="text" name="fatherName" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="fatherName" />
                            </div>
                            <div>
                                <label htmlFor="motherName" className="font-bold">Mother</label>
                                <input type="text" name="motherName" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="motherName" />
                            </div>
                            <div>
                                <label htmlFor="presentAddress" className="font-bold">Present Address</label>
                                <input type="text" name="presentAddress" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="presentAddress" />
                            </div>
                            <div>
                                <label htmlFor="permanentAddress" className="font-bold">Permanent Address</label>
                                <input type="text" name="permanentAddress" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="permanentAddress" />
                            </div>
                        </div>

                        {/* 3rd row */}
                        <div className="w-full grid grid-cols-4 gap-2">
                            <div>
                                <label htmlFor="number" className="font-bold">Mobile</label>
                                <input type="number" name="mobile" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="number" />
                            </div>
                            <div>
                                <label htmlFor="password" className="font-bold">Password</label>
                                <input type="password" name="password" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="password" />
                            </div>
                            <div>
                                <label htmlFor="joiningDate" className="font-bold">Joining Date</label>
                                <input type="date" name="joiningDate" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="joiningDate" />
                            </div>
                            <div>
                                <label htmlFor="designation" className="font-bold"> Designation</label>
                                <select name="" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="designation" defaultValue={'df'}>
                                    <option value="df">Choose One</option>
                                    <option value="shareHolder">Share Holder</option>
                                    <option value="manager">Manager</option>
                                    <option value="assistant">Asistant</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* uploaded image */}
                    <div className="w-2/12">
                        <span className="font-bold block mb-3">Upload Photo</span>
                        <label htmlFor="file-upload" className="flex justify-center items-center w-full h-36 border-2 border-slate-200 rounded-lg cursor-pointer relative overflow-hidden">
                            {image ? <img src={image} alt="uploaded" className="absolute inset-0 w-full h-full object-cover" /> : <div className=" text-gray-500 flex flex-col items-center"><IoCloudUploadOutline className="text-xl" /> <span>Upload Photo</span></div>}
                        </label>
                        <input type="file" id="file-upload" className="hidden" onChange={handleImageChange} />
                    </div>

                </form>

            </div>

            <div>

            </div>

        </div>
    );
};

export default AddUser;