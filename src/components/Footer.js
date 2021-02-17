import React from 'react';
import logo from '../assets/img/logo.png';

function Footer() {

    return (
        <footer className="grid grid-cols-2 gap-10 mt-32 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div>
                <img className="h-6 mb-5" src={logo} />
                <p className="text-gray-500 text-justify">TWIN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.</p>
            </div>
            <div>
                <p className="text-2xl font-bold mb-3">Learn</p>
                <div className="flex flex-col text-gray-500 space-y-2 w-min whitespace-nowrap">
                    <p className="cursor-pointer">Help center</p>
                    <p className="cursor-pointer">Join ZEN team</p>
                    <p className="cursor-pointer">Privacy & Policy</p>
                    <p className="cursor-pointer">Cookies</p>
                    <p className="cursor-pointer">Terms of us</p>
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold mb-3">Discover</p>
                <div className="flex flex-col text-gray-500 space-y-2 w-min whitespace-nowrap">
                    <p className="cursor-pointer">For developers</p>
                    <p className="cursor-pointer">Apple Pay</p>
                    <p className="cursor-pointer">Google Pay</p>
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold mb-3">Offer</p>
                <div className="flex flex-col text-gray-500 space-y-2 w-min whitespace-nowrap">
                    <p className="cursor-pointer">Business</p>
                    <p className="cursor-pointer">Personal</p>
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold mb-3">Contact</p>
                <div className="flex flex-col text-gray-500 space-y-2">
                    <p>123 456 7789 10</p>
                    <p>info@twin.com</p>
                    <p>New City, USA</p>
                    <p>WI - 221 47 86</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
