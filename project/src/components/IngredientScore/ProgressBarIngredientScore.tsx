import { BarProgress } from "../../Styled/IngredientScoreStyles";

interface ProgressBarProps {
  range: number;
}

const ProgressBar = ({ range }: ProgressBarProps) => {
  return (
    <>
      <BarProgress>
        <div
          style={{
            width: `${range}%`,
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "#B84246",
            height: "100%",
          }}
        ></div>
      </BarProgress>
    </>
  );
};

export default ProgressBar;
