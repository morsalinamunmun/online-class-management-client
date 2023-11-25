
import Swal from 'sweetalert2'
const AddClass = () => {
    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const status = form.status.value;
        const name = form.name.value;
        const D_email = form.D_email.value;
        const DImage_url = form.DImage_url.value;
        const location = form.location.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const image_url = form.image_url.value;

        const foodInfo = { foodName, status, location, quantity, date, notes, image_url, name, D_email, DImage_url }

        //send form data to server
        fetch('https://food-donation-server-five.vercel.app/food ', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(foodInfo)
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
                        <input type="text" name="name" placeholder="Your Name" className="rounded-lg border-2 border-teal-500 input input-bordered w-full " required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="rounded-lg border-2 border-teal-500 input input-bordered w-full" required />
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
