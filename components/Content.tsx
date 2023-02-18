"use client";
import { fetchCategories, fetchJoke } from "@/api/api";
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

  // Get Categories from the API
  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  // Each time we click on one of the category, new Joke API will be fetch
  async function handleCategoryClick(category: string) {
    // OnClick set the category to the new category
    setSelectedCategory(category);
    // Fetch the API Joke base on which category have been selected
    const newJoke = await fetchJoke(category);
    // Switch the newJoke with the oldJoke
    setJoke(newJoke);
  }

  // refresh the Joke we have right now with a new one
  async function refreshJoke() {
    // If there is no category then...
    if (!selectedCategory) {
      // Just fetch a random joke
      // Note: In the beginning the default category will be dev
      const newJoke = await fetchJoke();
      setJoke(newJoke);
    } else {
      // Fetch a newJoke with the selectedCategory
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
