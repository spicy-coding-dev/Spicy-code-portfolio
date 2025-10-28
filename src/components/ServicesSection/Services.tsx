
import { motion, AnimatePresence } from "framer-motion";
import  { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, secure, and fully responsive websites using modern web technologies. From portfolio sites to complex web applications, we ensure performance and scalability for your business growth.",
    img: "/ServicesSectionImgs/webdev.jpg",
  },
  {
    title: "Software Development",
    description:
      "We design and develop custom software tailored to your workflow — automating repetitive tasks, improving efficiency, and delivering scalable business solutions across multiple platforms.",
    img: "/ServicesSectionImgs/software_development.jpg",
  },
  {
    title: "UI / UX Design",
    description:
      "Our UI/UX team creates clean, intuitive, and user-centered designs that improve user satisfaction, retention, and engagement — combining aesthetics with functionality for the best digital experiences.",
    img: "/ServicesSectionImgs/uiux.jpg",
  },
  {
    title: "Mobile Application",
    description:
      "We develop high-quality mobile applications for Android and iOS using the latest frameworks. Our apps are designed to deliver smooth performance, sleek interfaces, and seamless user experiences.",
    img: "/ServicesSectionImgs/mobile_application.jpeg",
  },
  {
    title: "Digital Marketing",
    description:
      "We help your brand grow online through SEO, social media marketing, and targeted ad campaigns. Our strategies are data-driven to increase visibility, traffic, and conversions effectively.",
    img: "/ServicesSectionImgs/digital_marketing.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "Our creative team designs eye-catching posters, logos, and branding materials that reflect your brand identity. We craft visuals that captivate your audience and leave a lasting impression.",
    img: "/ServicesSectionImgs/graphic_design.jpg",
  },
  {
    title: "Video Editing",
    description:
      "From promotional videos to cinematic edits, we deliver professional-quality video editing that enhances your content’s storytelling and visual appeal across all digital platforms.",
    img: "/ServicesSectionImgs/video_editing.jpg",
  },
];

export default function ServicesSection() {
  const [current, setCurrent] = useState(0);

  const nextService = () => {
    setCurrent((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };
  const prevService = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="md:min-h-screen h-auto bg-black text-white py-20 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Our <span className="text-indigo-500">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Empowering your business with end-to-end digital solutions that drive
          results.
        </motion.p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="relative group overflow-hidden rounded-2xl shadow-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
          >
            <img
              src={service.img}
              alt={service.title}
              loading="lazy"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-300">{service.description}</p>
            </div>
            <h3 className="text-white text-lg font-semibold mt-3 text-center">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden relative flex flex-col items-center mt-6">
        <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-slate-700 relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current} // motion wrapper key
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative w-full "
            >
              <img
                src={services[current].img}
                alt={services[current].title}
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-cyan-300 ml-10 mb-2">
                  {services[current].title}
                </h3>
                <p className="text-sm text-slate-300 ml-7">
                  {services[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={prevService}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-cyan-500/60 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextService}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-cyan-500/60 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicator Boxes */}
        <div className="flex gap-2 mt-4">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-5 rounded-sm transition-all duration-300 ${
                i === current ? "bg-cyan-400 w-8" : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
