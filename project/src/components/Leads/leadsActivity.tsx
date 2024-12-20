import image from '../../assets/Group 998.svg';
import { useState } from "react";
import AddIngredient from "./AddIngredient";
import { Button, ButtonContainer, DownloadText, DownloadIconContainer, DownloadButtonContainer, LineofText, MainContainer } from "../../Styled/leadsActivityStyles";
const LeadsActivity = () => {
  const [isShowIngredient, setShowIngredient] = useState(false);
  const [isShowActivity, setShowActivity] = useState(false);
  const [isShowContent, setShowContent] = useState(false);
  const [isShowApplication, setShowApplication] = useState(false);
  const ShowIngredient = () => {
    setShowIngredient(true);
    setShowActivity(false);
    setShowApplication(false);
    setShowContent(false);
  };
  const ShowActivity = () => {
    setShowActivity(true);
    setShowIngredient(false);
    setShowApplication(false);
    setShowContent(false);
  };
  const ShowContent = () => {
    setShowContent(true);
    setShowIngredient(false);
    setShowActivity(false);
    setShowApplication(false);
  };
  const ShowApplicaton = () => {
    setShowApplication(true);
    setShowIngredient(false);
    setShowActivity(false);
    setShowContent(false);
  };

 
  return (
    <MainContainer>
      <h3
        style={{
          marginLeft: "27px",
          fontFamily: "sans-serif",
          color: "#022343",
        }}
      >
        Leads Activity
      </h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonContainer>
          <Button onClick={ShowActivity} isBgColor={isShowActivity}>
            Activity
          </Button>
          <Button onClick={ShowContent} isBgColor={isShowContent}>
            Content Type
          </Button>
          <Button onClick={ShowIngredient} isBgColor={isShowIngredient}>
            Ingrediets
          </Button>
          <Button onClick={ShowApplicaton} isBgColor={isShowApplication}>
            Applications
          </Button>
        </ButtonContainer>
        <DownloadButtonContainer>
          <DownloadIconContainer>
            <img src={image} />
          </DownloadIconContainer>
          <DownloadText>Download Graph</DownloadText>
        </DownloadButtonContainer>
      </div>
      <LineofText>
        Overview of your leads' interest scores for ingredients across all
        tracked content, including both your content and that of other
        exhibitors.
      </LineofText>
      {isShowIngredient && <AddIngredient />}
    </MainContainer>
  );
};

export default LeadsActivity;
