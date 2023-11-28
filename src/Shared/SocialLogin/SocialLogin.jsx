import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {useNavigate} from "react-router-dom"

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/')
                })
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="ml-1 flex items-center text-blue-500 underline"><FaGoogle></FaGoogle>Login With Google</button>
        </div>
    );
};

export default SocialLogin;