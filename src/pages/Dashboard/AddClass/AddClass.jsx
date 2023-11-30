
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
const AddClass = () => {
    const {user} = useAuth();
    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const classInfo = { title, price, description, image_url, name, email }

        //send form data to server
        fetch('https://y-gold-beta.vercel.app/classes', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(classInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Food add successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <>
            <div className="p-10 max-w-4xl mx-auto py-20">
                <h2 className="text-3xl font-extrabold">Add Class</h2>
                <form onSubmit={handleAddFood}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Title" name="title" className="rounded-lg border-2 border-teal-500 input input-bordered  w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user.displayName} placeholder="Your Name" className="rounded-lg border-2 border-teal-500 input input-bordered w-full " required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user.email} readOnly placeholder="Email" className="rounded-lg border-2 border-teal-500 input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="rounded-lg border-2 border-teal-500 input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="rounded-lg border-2 border-teal-500 input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image_url" placeholder="Image Url" className="rounded-lg border-2 border-teal-500 input input-bordered w-full" required />
                    </div>
                    <input type="submit" value="Add Class" className=" mt-10 btn btn-block bg-teal-500 text-white" />
                </form>
            </div>
        </>
    );
};

export default AddClass;
