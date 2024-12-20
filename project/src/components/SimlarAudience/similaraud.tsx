import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/44 1.svg";
import { useNavigate } from "react-router-dom";
import {
  Combine2000leadsContainer,
  SimilarLeadsContainer,
  SimilarLeadsText,
  SVGContainer,
  ThisEstimateTextContainer,
  ThisEstimateText,
  ViewLeadsContainer,
  ViewLeadsText,
  ViewLeadsIconBox,
  SimilarAudContent,
  SimilarAudMainContainer,
  StyledIcon,
  TextContainer,
  TextSimilarAudContainer,
  TextSimilarAud,
} from "../../Styled/similarAudStyles";

const Similaraud = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/nav");
  };

  return (
    <>
      <SimilarAudMainContainer>
        <SimilarAudContent>
          <SVGContainer aria-label="Profile Image">
            <img src={image} />
          </SVGContainer>
          <TextContainer>
            <TextSimilarAudContainer>
              <TextSimilarAud aria-label="audience div">
                Similar Audience
              </TextSimilarAud>
            </TextSimilarAudContainer>
            <ThisEstimateTextContainer role="section">
              <ThisEstimateText>
                This is an estimate count of contacts that have similar traits
                to your existing leads. Click through to target them with a
                Smartcore campaign.
              </ThisEstimateText>
            </ThisEstimateTextContainer>
            <Combine2000leadsContainer>
              <SimilarLeadsContainer>
                <SimilarLeadsText>
                  +2000 Similar Leads
                </SimilarLeadsText>
              </SimilarLeadsContainer>
              <ViewLeadsContainer
                role="button"
                aria-roledescription="View leads button"
                onClick={handleClick}
              >
                <ViewLeadsText>View leads</ViewLeadsText>
                <ViewLeadsIconBox>
                  <StyledIcon icon={faChevronRight} />
                </ViewLeadsIconBox>
              </ViewLeadsContainer>
            </Combine2000leadsContainer>
          </TextContainer>
        </SimilarAudContent>
      </SimilarAudMainContainer>
    </>
  );
};

export default Similaraud;
