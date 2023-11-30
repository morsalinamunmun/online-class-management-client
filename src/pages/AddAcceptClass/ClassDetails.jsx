import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ClassDetails = () => {
    const role = 'accepted';
    const [classes, setClasses] = useState([]);
console.log(classes)
useEffect(()=>{
    axios.get('http://localhost:5000/classes')
    .then(res=> {   
        setClasses(res.data)})
}, [])
const classesItem = classes.filter(acpClass=> acpClass.role == role)
    const {id} = useParams();
    console.log(id)
    const classItems = classesItem.filter(product=> product._id === (id));
    console.log(classItems)
    return (
        <div className="p-20">
            {
                classItems.map(classDetail=> <div className="flex flex-col md:flex-row gap-20" key={classDetail._id}>
                    <img className="w-1/3" src={classDetail.image_url} alt="" />
                    <div className="space-y-5">
                        <h2>{classDetail.title}</h2>
                        <p>{classDetail.description}</p>
                        <div className="flex gap-20">
                            <h2><span className="text-teal-500 font-bold">Teacher:</span> {classDetail.name}</h2>
                            <p><span className="text-teal-500 font-bold">TK:</span> {classDetail.price}</p> 
                        </div>
                        <button className="border-teal-500 px-5 py-2 border-2 cursor-pointer">Payment</button>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default ClassDetails;