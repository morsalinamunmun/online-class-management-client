import banner from '../../assets/Teaching-Online.png'
const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-teal-700 to-teal-50 min-h-screen'>
            <div className='flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-10 pt-28 '>
                <div className='space-y-5 w-1/2 text-white'>
                    <h2 className='text-3xl  font-bold'>Online  Learning Platform!</h2>
                    <p>Build skills with courses, certificates and degrees online from world class universities.</p>
                    <button className='bg-teal-500 p-2 rounded text-white'>Join for free</button>
                </div>
                <div className='w-1/2'>
                    <img className='w-full' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;