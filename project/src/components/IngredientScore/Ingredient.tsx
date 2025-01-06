import ProgressList from "./ProgressListIngredientScore";
import { categoryData } from "../Leads/AddIngredient";
import { AverageContent, ContentContainer, HighContent, HrLine, IntentScore, LowContainer, LowContent, MainContainer, Minerals, MineralsContent, MineralsProgress, Omega, OmegaContent, OmegaProgress, ProteinContent, ProteinProgress, Proteins, Triangular, VitaminContent, VitaminProgress, Vitamins } from "../../Styled/IngredientScoreStyles";

const Ingredient = () => {

  return (
    <Triangular>
      <MainContainer>
        <IntentScore>Intent Score</IntentScore>
        <HrLine></HrLine>
        <ContentContainer>
          <Proteins>
            <ProteinContent>Proteins, Peptides, Amino Acids</ProteinContent>
            <ProteinProgress>
              <LowContainer>
                <LowContent>Low</LowContent>
                <AverageContent>Average</AverageContent>
                <HighContent>High</HighContent>
              </LowContainer>
              <ProgressList items={categoryData["Proteins"]} />
            </ProteinProgress>
          </Proteins>
          <Vitamins>
            <VitaminContent>Vitamins</VitaminContent>
            <VitaminProgress>
              <LowContainer>
                <LowContent>Low</LowContent>
                <AverageContent>Average</AverageContent>
                <HighContent>High</HighContent>
              </LowContainer>
              <ProgressList items={categoryData["Vitamins"]} />
            </VitaminProgress>
          </Vitamins>
          <Omega>
            <OmegaContent>Omega 3 & Fatty Acids</OmegaContent>
            <OmegaProgress>
              <LowContainer>
                <LowContent>Low</LowContent>
                <AverageContent>Average</AverageContent>
                <HighContent>High</HighContent>
              </LowContainer>
              <ProgressList items={categoryData["Omega3"]} />
            </OmegaProgress>
          </Omega>
          <Minerals>
            <MineralsContent>Minerals</MineralsContent>
            <MineralsProgress>
              <LowContainer>
                <LowContent>Low</LowContent>
                <AverageContent>Average</AverageContent>
                <HighContent>High</HighContent>
              </LowContainer>
              <ProgressList items={categoryData["Herbs"]} />
            </MineralsProgress>
          </Minerals>
        </ContentContainer>
      </MainContainer>
    </Triangular>
  );
};

export default Ingredient;
