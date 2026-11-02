
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const footerLinks = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Centre", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Centre", "Privacy", "Contact Us"],
];

function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook" },
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaYoutube />, label: "YouTube" },
  ];

  return (
    <footer className="box-border w-full bg-[#141414] px-5 pb-5 pt-[35px] font-[Arial,Helvetica,sans-serif] text-[#808080] md:px-[30px] md:pb-5 md:pt-[45px] lg:px-6 lg:pb-3 lg:pt-[65px]">
      <div className="mx-auto max-w-[960px]">

        {/* Social Media Icons */}
        <div className="mb-5 flex items-center gap-[25px] md:gap-[25px] lg:gap-[30px]">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="flex items-center text-[20px] text-white no-underline transition-colors duration-200 hover:text-[#b3b3b3] md:text-[22px]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Link Columns */}
        <div className="grid grid-cols-2 gap-x-[15px] gap-y-7 md:gap-x-5 md:gap-y-[30px] lg:grid-cols-4 lg:gap-6">
          {footerLinks.map((column, index) => (
            <div
              className="flex flex-col gap-[17px]"
              key={index}
            >
              {column.map((link) => (
                <a
                  href="#"
                  className="text-xs leading-relaxed text-[#808080] no-underline transition-colors duration-200 hover:text-white hover:underline md:text-[13px]"
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="mb-0 mt-7 text-[11px] text-[#808080] md:text-xs lg:mt-[30px]">
          © 1997-2026 Netflix, Inc.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
