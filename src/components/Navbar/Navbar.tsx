"use client";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: { name: string; href: string }[] = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Framer motion variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="fixed w-full z-50 top-0 left-0">
      <nav
        className={`flex justify-between items-center h-20 px-6 md:px-12 transition-all duration-300 ${
          scrolled ? "bg-black/90 shadow-lg backdrop-blur-sm" : "bg-black"
        }`}
      >
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-orange-500 cursor-pointer"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Spicy Code
        </motion.div>

        {/* Desktop Links */}
        <motion.ul
          className="hidden md:flex gap-10 text-white font-medium"
          initial="hidden"
          animate="visible"
        >
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              className="relative group"
              variants={itemVariants}
              custom={i + 1}
            >
              <a
                href={link.href}
                className="hover:text-orange-500 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(`${link.href}`);
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </a>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Get Started Button */}
        <motion.div
          className="hidden md:block"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={links.length + 1}
        >
          <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition-colors duration-300">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(`#contact`);
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </a>
          </button>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          className="md:hidden bg-black/95 backdrop-blur-sm flex flex-col items-center py-6 space-y-4 text-white font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <a
                href={link.href}
                className="hover:text-orange-500 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.button
            className="bg-orange-500 px-5 py-2 rounded hover:bg-orange-600 transition-colors duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(`#contact`);
                section?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Get Started
            </a>
          </motion.button>
        </motion.ul>
      )}
    </div>
  );
};

export default NavBar;
