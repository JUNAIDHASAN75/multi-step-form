
const PersonalInfo = ({formData, setFormData}) => {
    return (
        <div>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="First Name"  value={formData.firstName}  onChange={(e)=>setFormData({
                ...formData, firstName: e.target.value
            })}  name="firstName"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="Last Name" value={formData.lastName}  onChange={(e)=>setFormData({
                ...formData, lastName: e.target.value
            })}  name="lastName"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="User Name"  value={formData.userName}  onChange={(e)=>setFormData({
                ...formData, userName: e.target.value
            })} name="userName"/>
        </div>
    );
};

export default PersonalInfo;