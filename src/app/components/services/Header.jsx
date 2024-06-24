import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='min-h-[600px] w-screen bg-servicesBackground bg-cover p-7 lg:px-20 lg:py-10'>
            <Navbar />
            <div className='w-full h-auto flex flex-col gap-[75px] lg:gap-4 md:items-center md:text-center md:pt-20 text-white'>
                <p className="font-light max-w-[600px] text-4xl md:text-5xl md:leading-[70px]">Empowering<span className='font-bold'> Businesses Through Scalable Technology</span></p>
                <p className='font-normal text-[16px] max-w-[700px]'>We don&apos;t just build software, we build your future. We craft innovative and scalable technology solutions that empower your business to thrive in the digital age.</p>
            </div>
        </div>
    );
};

export default Header;
