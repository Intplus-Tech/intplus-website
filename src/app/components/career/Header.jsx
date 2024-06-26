import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className='min-h-[500px] lg:min-h-[600px] w-screen bg-servicesBackground bg-cover p-7 lg:px-20 lg:py-10'>
            <Navbar />
            <div className='w-full h-auto flex flex-col gap-5 lg:gap-4 md:items-center text-center md:pt-20 text-white tracking-wide'>
                <p className="font-light max-w-[600px] text-3xl md:text-5xl md:leading-[70px]">Join Our<span className='font-bold'> Growing Innovative Great Minds</span></p>
                <p className='font-normal text-[16px] max-w-[700px]'>Here at Int+, we&apos;re not just building software, we&apos;re building a future. We&apos;re looking for passionate and talented individuals to join our team and make a real impact.</p>
            </div>
        </div>
    );
};

export default Header;
