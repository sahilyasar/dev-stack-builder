const Footer = () => {
    return (
        <footer className="border-t border-gray-100 bg-white mt-20">
            <div className="container mx-auto px-4 mt-10">

               
                <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
                                DS
                            </div>

                            <h2 className="text-lg font-bold text-gray-900">
                                Dev <span className="text-pink-500">Stack</span>
                            </h2>
                        </div>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-5 flex gap-5 text-sm font-medium text-gray-700">
                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                            Product
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-gray-500">
                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Technologies
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-gray-500">
                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Contact
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                            Legal
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-gray-500">
                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="transition hover:text-pink-500"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col gap-4 border-t border-gray-100 py-5 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="transition hover:text-gray-700"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-gray-700"
                        >
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;