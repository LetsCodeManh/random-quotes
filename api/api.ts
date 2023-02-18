export async function fetchJoke(
  category: string | null = null
): Promise<string> {
  const url = category
    ? `https://api.chucknorris.io/jokes/random?category=${category}`
    : "https://api.chucknorris.io/jokes/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data.value;
}

export async function fetchCategories(): Promise<string[]> {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await response.json();
  return categories;
}
