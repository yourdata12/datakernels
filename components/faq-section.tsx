"use client";

import { useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const faqs = [
  {
    question: "What services does DataKernels offer?",
    answer:
      "We offer web and app development, AI-powered solutions, data analytics, and CRM automations. Our team also builds customized software tailored to unique business needs, helping you scale efficiently.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Our services are designed to serve any industry. We’ve worked with businesses in e-commerce, healthcare, finance, education, logistics, and more—delivering scalable and practical tech solutions.",
  },
  {
    question: "Do you provide end-to-end project development?",
    answer:
      "Yes, we manage the full lifecycle—from planning and prototyping to deployment and maintenance. Our team ensures your project is delivered smoothly and aligned with your business goals.",
  },
  {
    question: "How does DataKernels integrate AI into business solutions?",
    answer:
      "We use AI to automate operations, enhance customer engagement, and drive actionable insights. Our solutions are built to adapt to your workflows and offer intelligent, real-time decision-making.",
  },
  {
    question: "Is your team available for ongoing support and maintenance?",
    answer:
      "Absolutely. We offer structured maintenance plans and proactive support to ensure your platforms remain secure, updated, and running smoothly post-launch.",
  },
  {
    question: "Can you modernize or optimize our existing systems?",
    answer:
      "Yes, we upgrade outdated systems, optimize performance, and transition infrastructure to modern tech stacks. This helps improve speed, scalability, and maintainability.",
  },
  {
    question: "What is your typical project delivery timeline?",
    answer:
      "Most MVPs are delivered in 3–6 weeks, depending on the scope. We work in agile sprints and keep you updated at every milestone for full transparency.",
  },
  {
    question: "How can I get a quote or consultation?",
    answer:
      'You can easily get started by filling out our <a href="#contact" class="text-core-blue underline">contact form</a>. We’ll schedule a free consultation to understand your goals and suggest the right approach.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="bg-white py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <div
        className="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="accent-line mx-auto mt-4"></div>
      </div>

      <div className="space-y-4 transition-all duration-500 ease-in-out">
        {displayedFaqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md transition-all duration-300 shadow-sm"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <button
              className="w-full text-left px-6 py-4 focus:outline-none flex items-center justify-between"
              onClick={() => toggleIndex(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-core-blue text-xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {activeIndex === index && (
                <div
                  className="px-6 pb-4 text-gray-600 text-[15px]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="200">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block px-5 py-2 rounded-full border border-core-blue text-core-blue hover:bg-core-blue hover:text-white transition-all text-sm font-medium"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}
