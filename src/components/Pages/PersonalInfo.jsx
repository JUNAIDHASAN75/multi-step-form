
const PersonalInfo = () => {
    return (
        <div>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="First Name"  name="firstName"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="Last Name"  name="lastName"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="User Name"  name="userName"/>
        </div>
    );
};

export default PersonalInfo;