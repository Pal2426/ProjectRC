import ProgressBar from "./ProgressBar";
import line from "../../assets/Line.svg";
import line2 from "../../assets/Line (1).svg";
import { Line1, Line2, Line3, Line4, ContainerTopicName, MainContainerProgressList, TopicName } from "../../Styled/leadsActivityStyles";

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
    <MainContainerProgressList>
      <Line1>
        <img src={line}></img>
      </Line1>
      <Line2>
        {/* <Low>Low</Low> */}
        <img src={line2}></img>
      </Line2>
      <Line3>
        {/* <Average>Average</Average> */}
        <img src={line2}></img>
      </Line3>
      <Line4>
        {/* <High>High</High> */}
        <img src={line2}></img>
      </Line4>
      {items.map((item) => (
        <div
          key={item.name}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <ContainerTopicName>
            <TopicName>{item.name}</TopicName>
          </ContainerTopicName>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ProgressBar range={item.range} />
          </div>
        </div>
      ))}
    </MainContainerProgressList>
  );
};

export default ProgressList;
