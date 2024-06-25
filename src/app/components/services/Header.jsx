import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='min-h-[600px] w-screen bg-servicesBackground bg-cover p-7 lg:px-20 lg:py-10'>
            <Navbar />
            <div className='w-full h-auto flex flex-col gap-5 lg:gap-4 md:items-center text-center md:pt-20 text-white tracking-wide'>
                <p className="font-light lg:max-w-[600px] text-3xl md:text-5xl md:leading-[70px]">Empowering<span className='font-bold'> Businesses Through Scalable Technology</span></p>
                <p className='font-normal text-[16px] lg:max-w-[700px]'>We don&apos;t just build software, we build your future. We craft innovative and scalable technology solutions that empower your business to thrive in the digital age.</p>
            </div>
        </div>
    );
};

export default Header;
