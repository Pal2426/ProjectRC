// import line from "../../assets/Line.svg";
// import line2 from "../../assets/Line (1).svg";

import { ContainerTopicName, Line1, Line1Minerals, Line1Omega, Line1Vitamin, Line2, Line2Minerals, Line2Omega, Line2Vitamins, Line3, Line3Minerals, Line3Omega, Line3Vitamins, Line4, Line4Minerals, Line4Omega, Line4Vitamins, ProgressBarContainerProtein, ProgressListContainer, TopicName } from "../../Styled/IngredientScoreStyles";
import ProgressBar from "./ProgressBarIngredientScore";

interface itemsList {
  name: string;
  range: number;
  label: string;
}
interface Props {
  items: itemsList[];
}

const ProgressList = ({ items }: Props) => {
  return (
    <ProgressListContainer>
      <ContainerTopicName>
        {items.map((item) => (
          <div key={item.name}>
            <TopicName>{item.name}</TopicName>
          </div>
        ))}
      </ContainerTopicName>
      <ProgressBarContainerProtein>
        {items.map((item) => (
          <div key={item.name} style={{}}>
            <Line1></Line1>
            <Line1Vitamin></Line1Vitamin>
            <Line1Omega></Line1Omega>
            <Line1Minerals></Line1Minerals>
            <Line2 />
            <Line2Vitamins></Line2Vitamins>
            <Line2Omega></Line2Omega>
            <Line2Minerals></Line2Minerals>
            <Line3 />
            <Line3Vitamins></Line3Vitamins>
            <Line3Minerals></Line3Minerals>
            <Line3Omega></Line3Omega>
            <Line4 />
            <Line4Vitamins></Line4Vitamins>
            <Line4Minerals></Line4Minerals>
            <Line4Omega></Line4Omega>
            <ProgressBar range={item.range} />
          </div>
        ))}
      </ProgressBarContainerProtein>
    </ProgressListContainer>
  );
};

export default ProgressList;
