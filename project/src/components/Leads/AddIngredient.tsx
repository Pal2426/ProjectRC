import Sidebar from "./Sidebar";
import ProgressList from "./ProgressList";
import { useState } from "react";
import { ContainerForTopic, IngredientMainContainer, ParentContainerForContainerForTopic, TextInsideContainerForTopic } from "../../Styled/leadsActivityStyles";

interface ItemsList {
  name: string;
  range: number;
  label: string;
}
export const categoryData: Record<string, ItemsList[]> = {
  Proteins: [
    { name: "Amino Acids", range: 100, label: "High" },
    { name: "Proteins", range: 60, label: "Average" },
    
  ],
  Vitamins: [
    { name: "Vitamin A", range: 100, label: "High" },
    { name: "Vitamin B", range: 60, label: "Average" },
    { name: "Vitamin C", range: 17, label: "Low" },
  ],
  Herbs: [
    { name: "Herb 1", range: 60, label: "Average" },

  ],
  "Dietery Fibre": [
    { name: "x", range: 60, label: "Average" },
    { name: "y", range: 60, label: "Average" },
  ],
  Omega3: [
    { name: "x", range: 60, label: "Average" },
    { name: "y", range: 60, label: "Average" },
  ],
  "Pro/Pre/Post biotics": [
    { name: "x", range: 60, label: "Average" },
    { name: "y", range: 60, label: "Average" },
  ],
  Minerals: [
    { name: "x", range: 60, label: "Average" },
    { name: "y", range: 60, label: "Average" },
  ],
};

const AddIngredient = () => {
  const [selectedCategory, setSelectedCategory] = useState("Vitamins");

  return (
    <IngredientMainContainer>
      <Sidebar
        categories={Object.keys(categoryData)}
        onSelectCategory={setSelectedCategory}
      />
      <ParentContainerForContainerForTopic>
        <ContainerForTopic>
          <TextInsideContainerForTopic>Topics</TextInsideContainerForTopic>
          <TextInsideContainerForTopic>Ingredient buying intent score</TextInsideContainerForTopic>
        </ContainerForTopic>
        <div>
          <ProgressList items={categoryData[selectedCategory]} />
        </div>
      </ParentContainerForContainerForTopic>
    </IngredientMainContainer>
  );
};

export default AddIngredient;
