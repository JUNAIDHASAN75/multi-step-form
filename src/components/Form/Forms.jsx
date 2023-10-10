import { useState } from "react";
import SignUp from "../Pages/SignUp";
import PersonalInfo from "../Pages/PersonalInfo";
import OtherInfo from "../Pages/OtherInfo";

const Forms = () => {
    const [page, setPage] = useState(0)

    const FormTitle = ["sign Up", "personal Info", "Other"];

    const pageDisplay = () => {
        if(page === 0){
            return <SignUp></SignUp>
        }else if(page === 1){
            return <PersonalInfo></PersonalInfo>
        }else{
            return <OtherInfo></OtherInfo>
        }
    }

    return (
        <div>
            <div className="">
                <h2 className="text-5xl font-bold text-purple-600 my-8" >Multi Step Form</h2>
                <progress className="progress progress-primary w-56" value={page == 0 ? "40": page == 1? "70":"100"} max="100"></progress>
                <div>
                    <div className="text-3xl font-semibold">{FormTitle[page]}</div>
                    <div>
                        
                        {pageDisplay()}

                    </div>
                    <div className="flex items-center gap-4 justify-center my-8">
                        <button className="btn bg-sky-600 text-white px-4 py-2"
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currPage => currPage - 1))
                            }} >Prev</button>
                        <button className="btn bg-sky-600 text-white px-4 py-2"
                            disabled={page == FormTitle.length - 1}
                            onClick={() => {
                                setPage((currPage => currPage + 1))
                            }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;