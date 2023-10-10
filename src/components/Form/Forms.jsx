import { useState } from "react";

const Forms = () => {
    const [page, setPage] = useState(0)
    const FormTitle = ["sign Up", "personal Info", "Other"]
    return (
        <div>
            <div className="">
                <h2 className="text-5xl font-bold text-purple-600">Multi Step Form</h2>
                <div>
                    <div>{FormTitle[page]}</div>
                    <div>body</div>
                    <div className="flex items-center gap-4 justify-center my-8">
                        <button className="btn bg-sky-600 text-white px-4 py-2"
                        disabled={page == 0}
                        onClick={()=>{
                            setPage((currPage=> currPage -1))
                        }} >Prev</button>
                        <button className="btn bg-sky-600 text-white px-4 py-2" 
                        disabled={page == FormTitle.length -1}
                        onClick={()=>{
                            setPage((currPage=> currPage +1))
                        }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;