import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UserTable from "./UserTable";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-2xl ">All Users</h2>
                <h2 className="text-2xl ">Total Users: {users.length}</h2>
            </div>
            <UserTable users={users} refetch={refetch}></UserTable>
        </div>
    );
};

export default AllUsers;

/* 
           
 */