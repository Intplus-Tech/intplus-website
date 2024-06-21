import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='min-h-[600px] w-screen bg-servicesBackground bg-cover p-7 lg:px-20 lg:py-10'>
            <Navbar />
            <div className='w-full h-auto flex flex-col gap-[75px] lg:gap-4 md:items-center md:text-center md:pt-20 text-white'>
                <p className="uppercase font-semibold text-[32px] w-[75%]">About Int+ technology</p>
                <p className='font-normal text-[16px] w-[50%]'>We are a digital transformation consultancy and engineering company that delivers cutting edge solutions for global organizations and technology startups.</p>
            </div>
        </div>
    );
};

export default Header;