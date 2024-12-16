import React from "react";
import { FloatingDockDemo } from "@/app/(components)/FloatingDockDemo";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black  text-[#c9d1d9] py-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <p className="text-sm">
                        © 2024 FloatingDockDemo. Все права защищены.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-[#58a6ff]">
                            <FaGithub size={20}/>
                        </a>
                        <a href="#" className="hover:text-[#58a6ff]">
                            <FaLinkedin size={20}/>
                        </a>
                        <a href="#" className="hover:text-[#58a6ff]">
                            <FaTwitter size={20}/>
                        </a>
                        <a href="#" className="hover:text-[#58a6ff]">
                            <FaYoutube size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
