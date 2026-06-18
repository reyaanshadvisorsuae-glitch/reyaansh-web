"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

type FaqItem = {
  answer: string;
  question: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/78 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(0,26,51,0.1)] ${
              isOpen ? "shadow-[0_24px_60px_rgba(0,26,51,0.12)]" : ""
            }`}
          >
            <button
              type="button"
              className="group flex w-full items-center justify-between p-6 text-left"
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => {
                setOpenIndex((currentIndex) =>
                  currentIndex === index ? -1 : index,
                );
              }}
            >
              <span className="font-headline-sm text-lg">
                {item.question}
              </span>
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-secondary/15 bg-secondary/8 text-secondary transition-all ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <MdExpandMore aria-hidden="true" />
              </span>
            </button>
            <div
              id={panelId}
              className={`px-6 pb-6 font-body-md text-body-md text-on-surface-variant ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className="mb-5 h-px w-full bg-outline-variant/50" />
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
