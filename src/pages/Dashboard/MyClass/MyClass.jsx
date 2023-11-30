import { useQuery } from "@tanstack/react-query";
//import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyClass = () => {
    const {user} = useAuth();
   const axiosPublic = useAxiosPublic();
    const {data: classes} = useQuery({
        queryKey: ['classes'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/classes/${user?.email}`);
            return res.data;
        }
    })
    return (
        <div>
            {
                classes.map(item=>
                    <div key={item._id}>{item.title}</div>
                )
            }
        </div>
    );
};

export default MyClass;