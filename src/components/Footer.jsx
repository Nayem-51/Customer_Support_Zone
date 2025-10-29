import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-5 md:mt-12">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">CS — Ticket System</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            CS — Ticket System helps businesses manage customer support efficiently. We provide a comprehensive platform for tracking, prioritizing, and resolving customer tickets with ease.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Our Mission</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact Saled</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-white">Products & Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Customer Stories</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Download Apps</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Information</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Join Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Social Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-400">𝕏</span>
                                    <span className="text-gray-400">@CS — Ticket System</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-400">in</span>
                                    <span className="text-gray-400">@CS — Ticket System</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-400">f</span>
                                    <span className="text-gray-400">@CS — Ticket System</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-400">✉</span>
                                    <span className="text-gray-400">support@cst.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-6 pt-4 text-center">
                    <p className="text-sm text-gray-400">© 2025 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;