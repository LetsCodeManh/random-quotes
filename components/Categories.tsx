import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

type Props = {
  categories: string[];
  selectedCategory: string | null;
  handleCategoryClick: (category: string) => void;
};

function Categories({
  categories,
  selectedCategory,
  handleCategoryClick,
}: Props) {
  return (
    <ul className="flex flex-wrap gap-4 justify-center items-center">
      {categories.map((category, index) => (
        <motion.li
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", index * 0.2, 0.4)}
          key={index}
          onClick={() => handleCategoryClick(category)}
          className={`text px-4 py-2 rounded-full  hover:bg-primary transition-colors border ${
            category === selectedCategory
              ? "bg-primary border-dark pointer-events-none"
              : "border-primary cursor-pointer "
          }`}
        >
          {category}
        </motion.li>
      ))}
    </ul>
  );
}

export default Categories;
