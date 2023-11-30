import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useTeacher = () => {
    const { user } = useAuth();
    console.log(user)
    const axiosSecure = useAxiosSecure();
    const {data: isTeacher} = useQuery({
        queryKey: [user?.email, 'isTeacher'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/teacherRequest/teacher/${user.email}`);
            return res.data?.teacher;
           
        }
    });
    return [isTeacher]
};

export default useTeacher;