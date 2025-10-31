import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Divider Line */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Terms & Privacy */}
      <div className="flex gap-2 font-semibold text-neutral-300">
        <p className="hover:text-white transition">Terms & Conditions</p>
        <p>|</p>
        <p className="hover:text-white transition">Privacy Policy</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 items-center">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src={social.icon}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain filter drop-shadow-md hover:drop-shadow-lg"
              alt={social.name}
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="font-semibold text-neutral-300">
        © 2025 <span className="text-white font-bold">Vivek</span>. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
