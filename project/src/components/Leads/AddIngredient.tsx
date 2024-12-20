import Sidebar from "./Sidebar";
import ProgressList from "./ProgressList";
import { useState } from "react";
import { ContainerForTopic, IngredientMainContainer, ParentContainerForContainerForTopic, TextInsideContainerForTopic } from "../../Styled/leadsActivityStyles";

interface ItemsList {
  name: string;
  range: number;
  label: string;
}
const categoryData: Record<string, ItemsList[]> = {
  Proteins: [
    { name: "x", range: 80, label: "High" },
    { name: "y", range: 60, label: "Average" },
    { name: "z", range: 30, label: "Low" },
  ],
  Vitamins: [
    { name: "Vitamin A", range: 80, label: "High" },
    { name: "Vitamin B", range: 60, label: "Average" },
    { name: "Vitamin C", range: 30, label: "Low" },
  ],
  Herbs: [
    { name: "Herb 1", range: 60, label: "Average" },
    { name: "Herb 2", range: 80, label: "High" },
    { name: "Herb 3", range: 30, label: "Low" },
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
