import { Link } from "react-router-dom";
import teacher from "../../../assets/1544246-full.jpg"
const AddTeacher = () => {
    return (
        <div className="hero min-h-screen max-w-4xl mx-auto">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img src={teacher} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">Become an Instructor</h1>
                    <p className="py-6">Instructor from around the world teach million of lerner on Udemy. We provide the tools and skills to teach what you love.</p>
                    <Link to='/teach'  className="btn bg-teal-500 text-white">Start Teacher Today</Link>
                </div>
            </div>
        </div>
    );
};

export default AddTeacher;