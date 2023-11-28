
const Subscribe = () => {
    return (
        <div className="my-20 max-w-5xl mx-auto">
            <div className="hero h-52 " style={{ backgroundImage: 'url(https://i.ibb.co/pQ3F1Fc/education.jpg)' }}>
                <div className="hero-overlay bg-teal-500 bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div>
                            <h2 className="font-bold text-2xl text-white">Our Online Class</h2>
                            <p>Subscribe if you want to enjoy our service quality</p>
                        </div>
                        <form className="flex items-center">
                            <input type="text" name="search" id="" placeholder="Search..." className="text-teal-500 py-2 px-3" />
                            <input className="bg-white px-2 py-2 text-teal-500 border-2 border-teal-800" type="submit" value="Subscribe" />
                            {/* <button type="submit" className="bg-orange-500 text-white px-3 py-2 rounded-r">Search</button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;