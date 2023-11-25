/* eslint-disable react/no-unescaped-entities */
import logo1 from '../../../assets/company/c-2.png'
import logo2 from '../../../assets/company/c-8.png'
import logo3 from '../../../assets/company/free-c.png'
import logo4 from '../../../assets/company/Huawei-Logo.png'
const Partner = () => {
    return (
        <div className='py-20'>
            <h2 className='text-3xl font-bold text-center'>Our Partnership</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto items-center  py-10'>
                <div className='border hover:bg-teal-50 text-center space-y-3 h-60 p-5'>
                    <img className='w-14 flex mx-auto' src={logo1} alt="" />
                    <h2 className='font-bold text-xl text-sky-800'>Certification</h2>
                    <p>A certification is a formal recognition of an individual's proficiency or expertise in a specific area or skill set. </p>
                </div>
                <div className='border hover:bg-teal-50 text-center space-y-3 h-60 p-5'>
                    <img className='w-14 flex mx-auto' src={logo2} alt="" />
                    <h2 className='font-bold text-xl text-teal-700'>experienced teach</h2>
                    <p>An experienced teacher is a highly skilled and knowledgeable educator with a track record knowledge</p>
                </div>
                <div className='border hover:bg-teal-50 text-center space-y-3 h-60 p-5'>
                    <img className='w-14 flex mx-auto' src={logo3} alt="" />
                    <h2 className='font-bold text-xl text-gray-500'>Free Online class</h2>
                    <p>Embark on a journey of knowledge without any cost with our Free Online Class!</p>
                </div>
                <div className='border hover:bg-teal-50 text-center space-y-3 h-60 p-5'>
                    <img className='w-16 flex mx-auto' src={logo4} alt="" />
                    <h2 className='font-bold text-xl text-red-700'>Huawei</h2>
                    <p>Huawei Technologies Co., Ltd., commonly known as Huawei, is a global technology giant headquartered</p>
                </div>
            </div>
        </div>
    );
};

export default Partner;