import { FAQ } from "../faq-tabs";

const FAQSection = () => {
  const faqData = [
    {
      question: " What services does Spicy Code provide?",
      answer:
        "Web development, App development, UI/UX design, Software development, Graphic Design,Video Editing and Digital consulting.",
    },
    {
      question: "How can I contact your team for a project?",
      answer: "Email, LinkedIn, or our website contact form.",
    },
    {
      question: "Can I request a custom solution for my project?",
      answer:
        "Yes, we offer fully customized solutions based on client requirements.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Timelines vary depending on project complexity; small projects can be completed in 1–2 weeks.",
    },
    {
      question: " Do you provide ongoing support after project delivery?",
      answer: "Yes, we provide support and maintenance for delivered projects.",
    },
    {
      question: "Do you work with startups only or established businesses too?",
      answer: "We work with both startups and established companies.",
    },
    {
      question: " How do you ensure quality in design and development?",
      answer:
        "Our team follows internal quality checks, peer review, and feedback loops.",
    },
    {
      question: " Can I see examples of your previous work?",
      answer:
        "Portfolio section showcases our UI/UX designs, development projects, and social media campaigns.",
    },
    {
      question: "Do you handle social media marketing?",
      answer:
        "Yes, we create content, schedule posts, and manage social media presence for clients.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Pricing depends on project scope; we provide a transparent quote after discussion.",
    },
  ];
  return (
    <div>
      <FAQ
        title="Frequently Asked Questions"
        subtitle="Let's answer some questions"
        faqData={faqData}
      />
    </div>
  );
};

export default FAQSection;
