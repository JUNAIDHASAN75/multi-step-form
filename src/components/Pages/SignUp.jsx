
const SignUp = () => {
    return (
        <div className="">
            <input className="w-full p-3 block border-2 rounded-md my-8" type="email" placeholder="Email"  name="email"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="password"  name="password"/>
            <input className="w-full p-3 block border-2 rounded-md my-8" type="text" placeholder="confirm Password"  name="confirm"/>
        </div>
    );
};

export default SignUp;