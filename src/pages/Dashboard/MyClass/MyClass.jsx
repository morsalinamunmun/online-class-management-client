
//import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyClass = () => {
    const {user} = useAuth();
   const axiosPublic = useAxiosPublic();
    const {data: classes= []} = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/classes/${user?.email}`);
            return res.data;
        }
    })
    console.log(classes)
    return (
        <div>
            {
                classes.map(item=>(
                    <div key={item._id}>{item.title}</div>)
                )
            }
        </div>
    );
};

export default MyClass;



// import useAxiosSecure from "../../../hooks/useAxiosSecure";
/* import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyClass = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: classes = [] } = useQuery(['classes', user?.email], async () => {
        const res = await axiosPublic.get(`/classes/${user?.email}`);
        return res.data;
    });
    console.log(classes);

    return (
        <div>
            {classes.map((item) => (
                <div key={item._id}>{item.title}</div>
            ))}
        </div>
    );
};

export default MyClass; */
