
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FooterBackgroundGradient } from "../hover-footer";
import { TextHoverEffect } from "../hover-footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function HoverFooter() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact us", href: "#contact" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#faq" },
        { label: "Support", href: "#contact" },
        {
          label: "Live Chat",
          href: "https://wa.me/918489025491?text=Vanakkam! I would like to know more about your services.",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "enquiry.spicycode@gmail.com",
      href: "mailto:enquiry.spicycode@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 9080132563",
      href: "tel:+919080132563",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+91 8438365490",
      href: "tel:+918438365490",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "Chennai",
    },
  ];

  // Social media icons
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61576032731550",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/spicy_coding?utm_source=qr&igsh=bHYxMHgzNjRtcXp1",
    },
    {
      icon: <Linkedin size={20} />,
      label: "Twitter",
      href: "https://www.linkedin.com/in/spicy-code-749424380/",
    },
  ];

  return (
    <footer className="bg-black relative h-fit  overflow-hidden">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8 lg:gap-10 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-2">
              <img
                src="/spicy_code_logo.png"
                alt="Spicy Code Logo"
                className="w-20 h-20  rounded-4xl"
              />
              <span className="text-white text-3xl font-bold">SPICY CODE</span>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Driving Digital Transformation with Smart, Scalable IT Solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6 relative pb-2">
                {section.title}
                <span className="absolute left-0 bottom-0 w-10 h-[3px] bg-gradient-to-r from-[#3ca2fa] to-[#00d4ff] rounded-full"></span>
              </h4>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors text-white"
                      onClick={(e) => {
                        // Only prevent scroll for internal page links (starting with #)
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          const section = document.querySelector(link.href);
                          section?.scrollIntoView({ behavior: "smooth" });
                        }
                        // else, it’s an external link like WhatsApp — let it open normally
                      }}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      {link.label}
                    </a>

                    {link.pulse && (
                      <span className="absolute top-0  w-2 h-2 left-[-12px] rounded-full bg-red-500 animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6 relative pb-2">
              Contact Us
              <span className="absolute left-0 bottom-0 w-10 h-[3px] bg-gradient-to-r from-[#3ca2fa] to-[#00d4ff] rounded-full"></span>
            </h4>

            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors text-white"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors text-white">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400 z-50">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                target="_black"
                rel="noopener noreferrer"
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors text-white"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left text-white">
            &copy; {new Date().getFullYear()} SpicyCode. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-40 -mb-36">
        <TextHoverEffect text="Spicy Code" className="z-10" />
      </div>

      <FooterBackgroundGradient />
      <ScrollToTopButton />
    </footer>
  );
}

export default HoverFooter;
