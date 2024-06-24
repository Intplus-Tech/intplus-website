import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='min-h-[600px] w-screen bg-servicesBackground bg-cover p-7 lg:px-20 lg:py-10'>
            <Navbar />
            <div className='w-full h-auto flex flex-col gap-[75px] lg:gap-4 md:items-center md:text-center md:pt-20 text-white'>
            <p className="font-light max-w-[600px] text-4xl md:text-5xl md:leading-[70px]">Who We <span className='font-bold'>Are</span> & <span className='font-bold'>How we can help</span></p>
                <p className='font-normal text-[16px] max-w-[700px]'>We&apos;re more than just developers. We&apos;re a team of strategic thinkers and problem solvers passionate about helping businesses succeed in the digital age. We offer a comprehensive suite of services, from design and development to consulting and support.</p>
                <p className='font-normal text-[16px] max-w-[600px] mt-2'>Let&apos;s explore how we can help you achieve your goals.</p>
            </div>
        </div>
    );
};

export default Header;
