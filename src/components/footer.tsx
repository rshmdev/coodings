import { SocialIcon } from "./social-icon";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" py-8">
     <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2023 CoDi. All rights reserved.</p>
          
          <div className="flex justify-center space-x-4 mt-4">
            <SocialIcon Icon={Facebook} link="https://facebook.com" />
            <SocialIcon Icon={Twitter} link="https://twitter.com" />
            <SocialIcon Icon={Linkedin} link="https://linkedin.com" />
            <SocialIcon Icon={Instagram} link="https://instagram.com" />
          </div>
        </div>
    </footer>
  );
};
