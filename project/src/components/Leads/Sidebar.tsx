import { useState } from "react";
import { ListCategories, MainContainerForSidebar, TopicCategories } from "../../Styled/leadsActivityStyles";

interface SidebarProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Sidebar = ({ categories, onSelectCategory }: SidebarProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <MainContainerForSidebar>
      <TopicCategories>Topic Categories</TopicCategories>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((category) => (
          <ListCategories
            key={category}
            isActive={activeCategory === category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </ListCategories>
        ))}
      </ul>
    </MainContainerForSidebar>
  );
};

export default Sidebar;
