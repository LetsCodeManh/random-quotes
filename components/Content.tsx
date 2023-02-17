"use client";
import { fetchCategories, fetchJoke } from "@/utils/api";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import RefreshButton from "./RefreshButton";

function Content() {
  const [joke, setJoke] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
    <main>
      <div>
        <img alt="Nothing" />
        {joke ? <p>{joke}</p> : <p>Please select one of the categories!</p>}
      </div>
      <RefreshButton onClick={refreshJoke} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
    </main>
  );
}

export default Content;
