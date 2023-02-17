import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

function Joke({ joke }: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0, 0.4)}
      className="min-h-[30vh] p-6 sm:p-10 border border-dark rounded-3xl"
    >
      {joke ? (
        <p className="text">{joke}</p>
      ) : (
        <p className="text">
          Please select one of the categories or press the button to refresh the
          quote!
        </p>
      )}
    </motion.div>
  );
}

export default Joke;
