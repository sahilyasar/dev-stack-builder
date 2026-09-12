import bannerimg from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className='py-20'>
            <div className='container mx-auto flex justify-between items-center px-4'>
                <div>
                    <h1 className="text-5xl font-bold">Build Your Ideal <br />
                        <span
                            className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Development Stack</span>

                    </h1>

                    <p className="mt-4 text-gray-500 font-semibold">
                        Explore frontend, backend, database, and tooling options,
                        <br />
                        compare them side by side, and put together the stack that fits your
                        <br />
                        next project.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="bg-gradient-to-r from-orange-500 to-purple-500
                         text-white px-5 py-3 rounded-lg font-medium">Explore Technologies</button>
                        <button className="border border-gray-300 px-15 py-3 rounded-lg font-medium">Learn More</button>
                    </div>
                </div>

                <div>
                    <img src={bannerimg} alt="Banner" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Banner;