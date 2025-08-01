import { useState } from "react";
import { Minus, Moon, Plus, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    id: 1,
    question: "Q1. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermenter nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis.",
  },
  {
    id: 2,
    question: "Q2. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a.",
  },
  {
    id: 3,
    question: "Q3. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulbina rproin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a. ncfcndjkcnksnooaecmkldnklco cndkjncac akj va.",
  },
  {
    id: 4,
    question: "Q4. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel.",
  },
  {
    id: 5,
    question: "Q5. Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel.",
  },
];

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleItem = (id: number) => {
    // Toggle the expansion state
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-neutral-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header with Dark Mode Toggle */}
      <div className="container mx-auto px-4 py-6 relative">
        <div className="flex justify-center items-center mb-8">
          <div>
            <h1
              className={`text-2xl md:text-3xl font-bold my-8 ${darkMode ? "text-sky-400" : "text-purple-600"}`}
            >
              Frequently asked questions
            </h1>
          </div>
          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className={`absolute right-0 top-0 rounded-full p-5 transition-all duration-300 ease-in-out ${darkMode ? "bg-gray-700 border-gray-600 text-yellow-400 shadow-xl hover:bg-gray-600 hover:text-yellow-300 hover:shadow-2xl" : "bg-white text-gray-700 border-gray-300 shadow-md hover:bg-gray-100 hover:shadow-lg"}`}
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {/* Top border for the entire accordion list */}
          <div
            className={`${darkMode ? "border-t-2 border-gray-500" : "border-t-2 border-gray-400"}`}
          >
            {faqData.map((item) => {
              const isExpanded = expandedItems.includes(item.id);

              return (
                <div
                  key={item.id}
                  // Bottom border for each FAQ item, serving as the separator
                  className={`border-b-2 ${darkMode ? "border-gray-500" : "border-gray-400"}`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none transition-colors duration-150 
                    `}
                  >
                    <span className="font-bold text-lg md:text-base pr-4">
                      {item.question}
                    </span>
                    {isExpanded ? (
                      <Minus className="h-5 w-5 text-gray-500 transition-transform duration-300 transform rotate-180" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4 pt-4">
                      <p
                        className={`text-md md:text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-900"}`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile-specific styling note */}
        <div className="mt-12 text-center">
          <p
            className={`text-xl ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Try switching to dark mode and resizing your browser to see the
            responsive design!
          </p>
        </div>
      </div>
    </div>
  );
}
