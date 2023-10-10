
const OtherInfo = ({formData, setFormData}) => {
    return (
        <div>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="Nationality"  value={formData.nationality}  onChange={(e)=>setFormData({
                ...formData, nationality: e.target.value
            })} name="nationality"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="Other..."  value={formData.other}  onChange={(e)=>setFormData({
                ...formData, other: e.target.value
            })} name="other"/>
        </div>
    );
};

export default OtherInfo;