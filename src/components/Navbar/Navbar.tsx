import logotext from "../../assets/logo-text.png"
const Navbar = () => {
    return (
        <nav  className="sticky top-0 z-1  bg-white">
            <div className='mx-auto container flex items-center justify-between py-4 px-4'>

                <div >
                    <img className="h-8 w-auto " src={logotext} alt="Dev Stack" />
                </div>
                <div className='flex gap-6 text-sm font-medium'>
                    <a className="transition hover:text-pink-500 " href="#">Home</a>
                    <a className="transition hover:text-pink-500 " href="#">Technologies</a>
                    <a className="transition hover:text-pink-500 " href="#">Projects</a>
                    <a className="transition hover:text-pink-500 " href="#">About</a>
                    <a className="transition hover:text-pink-500 " href="#">Contact</a>
                </div>
                <div className='flex'>
                    <button className="btn text-sm font-medium text-gray-600 border-0 bg-white">Sign In</button>
                    <button className="btn bg-[#D91B7E] text-white text-sm font-medium px-4 py-2 rounded-full" >Sign Up</button>
                </div>


            </div>


        </nav>
    );
};

export default Navbar;
