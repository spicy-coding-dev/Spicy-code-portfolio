import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

// ✅ Define a type for each FAQ item
interface FAQItemData {
  question: string;
  answer: string;
}

// ✅ Define a type for the FAQ component props
interface FAQProps {
  title?: string;
  subtitle?: string;
  faqData: FAQItemData[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  faqData,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-black to-orange-900 px-4 py-12 text-foreground",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQList faqData={faqData} />
    </section>
  );
};

interface FAQHeaderProps {
  title: string;
  subtitle: string;
}

const FAQHeader: React.FC<FAQHeaderProps> = ({ title, subtitle }) => (
  <div className="relative z-10 flex flex-col items-center justify-center">
    <span className="mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-medium text-white">
      {subtitle}
    </span>
    <h2 className="mb-8 text-3xl md:text-5xl font-bold text-white">{title}</h2>
    <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
  </div>
);

// ✅ Only one open at a time logic + Show More / Show Less
interface FAQListProps {
  faqData: FAQItemData[];
}

const FAQList: React.FC<FAQListProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 FAQs

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowMore = () => {
    setVisibleCount(visibleCount === 4 ? faqData.length : 4);
  };

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <AnimatePresence>
        {faqData.slice(0, visibleCount).map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-5"
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <FAQItem
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {faqData.length > 4 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={toggleShowMore}
            className="bg-indigo-500 hover:bg-indigo-700 transition px-6 py-3 rounded-full text-white font-semibold"
          >
            {visibleCount === 4 ? "Show More" : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
};

interface FAQItemProps extends FAQItemData {
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border transition-colors",
        isOpen ? "bg-transparent" : "bg-transparent"
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-white" : "text-white"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-red-500" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="text-white">{answer}</p>
      </motion.div>
    </motion.div>
  );
};
