import { useState } from "react";
import Header from "../../../../components/Shared/Header/Header";
import { FaPlusCircle,FaSave  } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";


const AddUser = () => {

    const [gender, setGender] = useState(null);
    const [designation, setDesignation] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };


    // add user 
    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;

        const nameEn = form.nameEn.value; 
        const nameBn = form.nameBn.value; 
        const fatherName = form.fatherName.value; 
        const motherName = form.motherName.value; 
        const birthDate = form.birthdate.value; 
        const presentAddress = form.presentAddress.value; 
        const permanentAddress = form.permanentAddress.value; 
        const mobile = form.mobile.value; 
        const password = form.password.value; 
        const joiningDate = form.joiningDate.value;

        const newUser = {
            nameEn, nameBn, fatherName, motherName, birthDate, presentAddress, permanentAddress, mobile, password, joiningDate, gender: gender, designation: designation
        }

        console.log(newUser);

    }




    return (
        <div className="">

            <div className="bg-white px-5 py-4 m-4">
                <Header title="New User" />

                <div>
                    <h2 className="text-base font-bold flex items-center gap-2 pb-3 border-b-2 border-b-slate-200 pt-6"><FaPlusCircle /> Add Your User</h2>
                </div>

                <form onSubmit={handleAddUser}>

                    <div className="md:flex md:gap-4 pt-3 pb-3 border-b-2 border-b-slate-200">
                        <div className="md:w-10/12 space-y-4">
                            {/* 1st row */}
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                                <div>
                                    <label htmlFor="nameEn" className="font-bold">Your Name(English)</label>
                                    <input type="text" name="nameEn" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="nameEn" required />
                                </div>
                                <div>
                                    <label htmlFor="nameBn" className="font-bold">Your Name(Bangla)</label>
                                    <input type="text" name="nameBn" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="nameBn" required />
                                </div>
                                <div>
                                    <label htmlFor="date" className="font-bold">Date Of Birth</label>
                                    <input type="date" name="birthdate" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="date" required />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="font-bold">Gender</label>
                                    <select name="" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="gender" defaultValue={'df'} onChange={(e) => setGender(e.target.value)}>
                                        <option value="df" disabled>Choose One</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>

                            {/* 2nd row */}
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                                <div>
                                    <label htmlFor="fatherName" className="font-bold">Father</label>
                                    <input type="text" name="fatherName" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="fatherName" required />
                                </div>
                                <div>
                                    <label htmlFor="motherName" className="font-bold">Mother</label>
                                    <input type="text" name="motherName" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="motherName" required />
                                </div>
                                <div>
                                    <label htmlFor="presentAddress" className="font-bold">Present Address</label>
                                    <input type="text" name="presentAddress" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="presentAddress" required />
                                </div>
                                <div>
                                    <label htmlFor="permanentAddress" className="font-bold">Permanent Address</label>
                                    <input type="text" name="permanentAddress" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="permanentAddress" required />
                                </div>
                            </div>

                            {/* 3rd row */}
                            <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                                <div>
                                    <label htmlFor="number" className="font-bold">Mobile</label>
                                    <input type="number" name="mobile" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="number" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="font-bold">Password</label>
                                    <input type="password" name="password" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" placeholder='Type here...' id="password" required />
                                </div>
                                <div>
                                    <label htmlFor="joiningDate" className="font-bold">Joining Date</label>
                                    <input type="date" name="joiningDate" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="joiningDate" required />
                                </div>
                                <div>
                                    <label htmlFor="designation" className="font-bold"> Designation</label>
                                    <select name="" className="bg-transparent w-full border-2 px-2 py-1 mt-2 outline-none rounded-sm" id="designation" defaultValue={'df'} onChange={(e) => setDesignation(e.target.value)}>
                                        <option value="df" disabled>Choose One</option>
                                        <option value="manager">Manager</option>
                                        <option value="assistant">Asistant</option>
                                        <option value="shareHolder">Share Holder</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* uploaded image */}
                        <div className="md:w-2/12 pt-3 md:pt-0">
                            <span className="font-bold block mb-3">Upload Photo</span>
                            <label htmlFor="file-upload" className="flex justify-center items-center w-full h-44 border-2 border-slate-200 rounded-lg cursor-pointer relative overflow-hidden">
                                {image ? <img src={image} alt="uploaded" className="absolute inset-0 w-full h-full object-contain" /> : <div className=" text-gray-500 flex flex-col items-center"><IoCloudUploadOutline className="text-xl" /> <span>Upload Photo</span></div>}
                            </label>
                            <input type="file" id="file-upload" className="hidden" onChange={handleImageChange} />
                        </div>
                    </div>

                    <button type="submit" className="bg-[#20b2aa] text-white font-semibold px-4 py-2 rounded-sm flex float-right items-center gap-2 mt-4 mb-7">
                        <FaSave  />
                        <span>Save</span>
                    </button>

                </form>

            </div>

            <div>

            </div>

        </div>
    );
};

export default AddUser;