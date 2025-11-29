import React from "react";
import { Instagram, Youtube, MessageCircle, Twitter } from "lucide-react";
import LocoLogo from "../../imports/LocoLogoFull";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <a href="#" className="block mb-8">
              <div className="w-[98px] h-16 relative">
                <LocoLogo />
              </div>
            </a>
            <p className="text-zinc-400 max-w-md mb-8 text-lg">
              NextWave of Creator Economy.<br />
              We build the future of entertainment.
            </p>
            <div className="flex gap-4">
              {[
                (props: any) => (
                  <svg
                    {...props}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                ),
                Instagram,
              ].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase">Address</h4>
              <p className="text-zinc-400 leading-relaxed">
                122-35, Cheongdam-dong,<br />
                Gangnam-gu, Seoul,<br />
                Republic of Korea
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase">Contact</h4>
              <p className="text-zinc-400 leading-relaxed">
                locolabs2022@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © 2025 LOCOLABS INC. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-zinc-600">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
