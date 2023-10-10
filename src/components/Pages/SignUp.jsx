
const SignUp = ({formData, setFormData}) => {
    return (
        <div className="">
            <input className="w-full p-3 block border-2 rounded-md my-8" type="email" placeholder="Email" value={formData.email} onChange={(e)=>setFormData({
                ...formData, email: e.target.value
            })} name="email"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="password"  value={formData.password}  onChange={(e)=>setFormData({
                ...formData, password: e.target.value
            })} name="password"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="confirm Password"  value={formData.confirm}  onChange={(e)=>setFormData({
                ...formData, confirm: e.target.value
            })} name="confirm"/>
        </div>
    );
};

export default SignUp;