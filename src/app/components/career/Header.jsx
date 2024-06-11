import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='min-h-[600px] w-screen bg-servicesBackground bg-cover p-7 lg:px-20 lg:py-10'>
            <Navbar />
            <div className='w-full h-auto flex flex-col gap-[75px] lg:gap-4 md:items-center md:text-center md:pt-20 text-white'>
                <p className="uppercase font-semibold text-[32px] w-[75%]">JOIN OUR FORWARD-THINKING INNOVATORS</p>
                <p className='font-normal text-[16px] w-[50%]'>We are an experienced, forward-thinking team of software engineers shaping a new reality with exciting ideas and cutting-edge technology. Join us and get new opportunities for career growth</p>
            </div>
        </div>
    );
};

export default Header;
