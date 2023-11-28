import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Teach = () => {
    const { user } = useContext(AuthContext);

    const handleAddApplication = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const title = form.title.value;
        const userImg = form.userImg.value;
        const category = form.category.value;
        const experience = form.experience.value;
        const applicationInfo = { name, title, category, experience, userImg}

        //send form data to server
        fetch('http://localhost:5000/application ', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(applicationInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Application send successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div className="py-20">
            <div className="bg-teal-100 p-10 max-w-5xl mx-auto ">
                <h2 className="text-3xl font-extrabold">Application form for teaching</h2>
                <form onSubmit={handleAddApplication}>
                    <div className="">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="rounded-lg border-2 border-teal-500 input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="rounded-lg border-2 border-teal-500 input input-bordered w-full " required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Types of Product</span>
                            </label>
                            <label className="input-group">
                                <select className="select border-teal-500 border-2 select-bordered w-full " name="experience">
                                    <option disabled selected className="w-full">Select Experience</option>
                                    <option>Beginner</option>
                                    <option>Experienced</option>
                                    <option>Some idea</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="userImg" defaultValue={user?.photoURL} placeholder="User Image Url" readOnly className="rounded-lg border-2 border-teal-500 input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Types of Product</span>
                            </label>
                            <label className="input-group">
                                <select className="select border-teal-500 border-2 select-bordered w-full " name="category">
                                    <option disabled selected className="w-full">Teaching Category</option>
                                    <option>Web development</option>
                                    <option>Digital marketing</option>
                                    <option>App development</option>
                                    <option>Graphic Design</option>
                                    <option>Data Science</option>
                                    <option>Full Stack development</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Application Send" className=" mt-10 btn btn-block bg-teal-500 text-white" />
                </form>
            </div>
        </div>
    );
};

export default Teach;