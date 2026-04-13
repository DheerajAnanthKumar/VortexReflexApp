import React from "react";
// import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-slate-900 bg-transparent py-6 z-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Professional Branding */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-sm font-bold tracking-tighter text-white uppercase">
            Dheeraj Ananth Kumar
          </h2>
          <p className="text-[9px] text-slate-500 uppercase tracking-widest">
            Software Engineer
          </p>
        </div>

        {/* Center: Clean Copyright */}
        <div className="text-[9px] text-slate-600 font-mono uppercase tracking-[0.3em]">
          © {currentYear}
        </div>

        {/* Right: Socials */}
        {/* <div className="flex items-center gap-6">
          <a
            href="https://github.com/DheerajAnanthKumar"
            className="text-slate-400 hover:text-lime-400 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dheeraj-ananth-kumar/"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:kumardheerajofficial96@gmail.com"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
