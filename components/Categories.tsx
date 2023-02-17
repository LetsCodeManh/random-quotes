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
    <ul>
      {categories.map((category, index) => (
        <li key={index} onClick={() => handleCategoryClick(category)}>
          {category}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
