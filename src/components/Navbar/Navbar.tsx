import logotext from "../../assets/logo-text.png"
const Navbar = () => {
    return (
        <nav >
            <div className='mx-auto container flex items-center justify-between py-4 px-4'>

                <div >
                    <img className="h-8 w-auto " src={logotext} alt="Dev Stack" />
                </div>
                <div className='flex gap-6 text-sm font-medium'>
                    <a className="text-pink-500 " href="#">Home</a>
                    <a className="text-gray-500 " href="#">Technologies</a>
                    <a className="text-gray-500 " href="#">Projects</a>
                    <a className="text-gray-500 " href="#">About</a>
                    <a className="text-gray-500 " href="#">Contact</a>
                </div>
                <div className='flex gap-4'>
                    <button className="text-sm font-medium text-gray-600">Sign In</button>
                    <button className="bg-[#D91B7E] text-white text-sm font-medium px-4 py-2 rounded-full" >Sign Up</button>
                </div>


            </div>


        </nav>
    );
};

export default Navbar;