import React from "react";

interface WhatsAppButtonProps {
  phone?: string; // WhatsApp number (with country code, no +)
  message?: string; // Prefilled message
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone = "918489025491", // 👈 change to your number
  message = "Vanakkam! I would like to know more about your services.",
  position = "bottom-right",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${encodedMessage}`;

  // 🎯 Set button position
  const positionClass = {
    "bottom-right": "bottom-8 right-5",
    "bottom-left": "bottom-5 left-5",
    "top-right": "top-5 right-5",
    "top-left": "top-5 left-5",
  }[position];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed ${positionClass} z-50 flex md:h-12 md:w-12 h-13 w-13 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl`}
    >
      {/* ✅ Use your downloaded WhatsApp image instead of SVG */}
      <img
        src="/whatappLogo.png" // 👈 change path based on where your file is
        alt="WhatsApp Logo"
        className="h-10 w-10"
      />
    </a>
  );
};

export default WhatsAppButton;
