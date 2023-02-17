import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
};

function RefreshButton({ onClick }: Props) {
  return (
    <motion.button
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0, 0.4)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`text px-4 py-2 rounded-full transition-colors bg-primary border border-dark`}
    >
      Refresh
    </motion.button>
  );
}

export default RefreshButton;
