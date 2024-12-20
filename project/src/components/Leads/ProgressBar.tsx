import { BarProgess, MainContainerProgressBar } from "../../Styled/leadsActivityStyles";
interface ProgressBarProps {
  range: number;
}

const ProgressBar = ({ range }: ProgressBarProps) => {
  return (
    <>
    
      <MainContainerProgressBar>
        <BarProgess>
          <div
            style={{
              width: `${range}%`,
              borderRadius: "0px 8px 8px 0px",
              backgroundColor: "#2536A1",
              height: "100%",
            }}
          ></div>
        </BarProgess>
      </MainContainerProgressBar>
    </>
  );
};

export default ProgressBar;
