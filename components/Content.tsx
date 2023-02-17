"use client";
import { fetchCategories, fetchJoke } from "@/utils/api";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import RefreshButton from "./RefreshButton";
import { motion } from "framer-motion";
import Joke from "./Joke";
import { fadeIn } from "@/utils/motion";

function Content() {
  const [joke, setJoke] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "dev"
  );

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  async function handleCategoryClick(category: string) {
    setSelectedCategory(category);
    const newJoke = await fetchJoke(category);
    setJoke(newJoke);
  }

  async function refreshJoke() {
    if (!selectedCategory) {
      const newJoke = await fetchJoke();
      setJoke(newJoke);
    } else {
      const newJoke = await fetchJoke(selectedCategory);
      setJoke(newJoke);
    }
  }

  return (
    <motion.main
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0.2, 0.4)}
      className={`flex flex-col justify-center items.center space-y-8 px-[5%] sm:px-[10%] md:px-[15%] lg:px-[20%]`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "tween", 0.5, 0.4)}
      >
        {/* <img alt="Nothing" /> */}
        <Joke joke={joke} />
      </motion.div>
      <RefreshButton onClick={refreshJoke} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
    </motion.main>
  );
}

export default Content;
