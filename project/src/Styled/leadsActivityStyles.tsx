import styled from "styled-components";

export const MainContainer = styled.div`
width: 1125px;
height: 760px;
top: -24px;
left: -24px;
gap: 0px;
border-radius: 0px 6px 6px 0px;
opacity: 0px;
border: 1px solid #a7bcc599;
`;
export const ButtonContainer = styled.div`
width: 412px;
height: 42px;
border-radius: 4px;
opacity: 0px;
margin: 10px;
margin-left: 27px;
`;
export const Button = styled.button<{ isBgColor: boolean }>`
width: 103px;
height: 42px;
border-radius: 0px;
color: #022343;
border: 1px solid #a7bcc54d;
background-color: ${({ isBgColor }) =>
  isBgColor ? "#DF5A28" : "transparent"};
`;
export const DownloadButtonContainer = styled.div`
width: 158.7px;
height: 40px;
left: 923px;
padding: 5px 7px 5px 7px;
gap: 6px;
border-radius: 4px 
opacity: 0px;
background-color: #FFFFFF;
border: 0.5px solid #00224480;
margin:5px;
display:flex

`;
export const DownloadText = styled.div`
width: 115px;
height: 19px;
gap: 0px;
opacity: 0px;
font-family: Open Sans;
font-size: 14px;
font-weight: 600;
line-height: 19.07px;
text-align: right;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #002244;
margin-top: 10px;
`;
export const DownloadIconContainer = styled.div`
width: 13.7px;
height: 15px;
gap: 0px;
border: 1px 0px 0px 0px;
opacity: 0px;
border: 1px solid #002244;
margin-top: 10px;
`;

export const LineofText = styled.div`
width: 1107px;
height: 23px;
top: 127.74px;
gap: 0px;
opacity: 0.7px;
font-family: Open Sans, sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 23.51px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #022343;
margin-left: 27px;
margin-top: 20px;
`;

//AddIngredient.tsx

export const IngredientMainContainer = styled.div`
  width: 1073px;
  height: 515.07px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: Mixed solid var(--100, #e9ebf6);
  display: flex;
  margin-left: 27px;
  margin-top: 30.23px;
`;
export const ContainerForTopic = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  gap: 250px;
  margin-top: 8px;
  margin-left: 25px;
`;
export const TextInsideContainerForTopic = styled.span`
  font-family: Open Sans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 12.7px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #022343;
`;
export const ParentContainerForContainerForTopic = styled.div`
  width: 857px;
  height: 515px;
  background-color: #a7bcc526;
`;


//sidebar.tsx
export const MainContainerForSidebar = styled.div`
width: 200px;
height: 415.07px;
gap: 47px;
background-color: white;
`;

export const ListCategories = styled.li<{ isActive: boolean }>`
width: 180px;
height: 43px;
padding: 12px 8px;
gap: 19px;
cursor: pointer;
border-left: ${({ isActive }) =>
  isActive ? "2px solid #002244" : "2px solid transparent"};
&:hover {
  background-color: #a7bcc526;
}
font-family: Open Sans, sans-serif;
font-size: 14px;
font-weight: ${({isActive})=>
isActive?"600":"400"};
line-height: 19.07px;
display: flex; 
align-items: center;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: ${({isActive})=>isActive?"#002244":"black"};
`;
export const TopicCategories = styled.span`
font-family: Open Sans, sans-serif;
font-size: 16px;
font-weight: 600;
text-align: left;
justify-content:center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #022343;
`;



//ProgressList.tsx

export const MainContainerProgressList = styled.div`
  width: 837px;
  height: 375.25px;
  margin-top: 14px;
`;
export const TopicName = styled.span`
  font-family: Open Sans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  // line-height: 12.7px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #022343;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ContainerTopicName = styled.div`
  width: 100px;
  height: 68.05px;
  padding: 0px 8px 0px 8px;
  opacity: 0px;
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center;
`;
export const Line1 = styled.div`
  width: 361px;
  height: 0px;
  position: absolute;
  top: 260px;
  left: 355.6px;
  background-color: red;
  gap: 0px;
  border: 0.6px 0px 0px 0px;
  opacity: 0px;
`;
export const Line2 = styled.div`
  width: 361px;
  height: 0px;
  position: absolute;
  top: 260px;
  left: 556px;
  gap: 0px;
  border: 0.6px 0px 0px 0px;
  opacity: 0px;
`;
export const Line3 = styled.div`
  width: 361px;
  height: 0px;
  position: absolute;
  top: 260px;
  left: 756px;
  gap: 0px;
  border: 0.6px 0px 0px 0px;
`;
export const Line4 = styled.div`
  width: 361px;
  height: 0px;
  position: absolute;
  top: 260px;
  left: 890px;
  gap: 0px;
  border: 0.6px 0px 0px 0px;
`;

// const Low=styled.div`
// width: 172px;
// height: 13px;
// font-family: Open Sans, Sans-Serif;
// font-size: 12px;
// font-weight: 600;
// line-height: 12.7px;
// text-align: left;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;
// color: #02234380;
// `;
// const Average=styled.div`
// width: 206px;
// height: 13px;
// font-family: Open Sans , sans-serif;
// font-size: 12px;
// font-weight: 600;
// line-height: 12.7px;
// text-align: left;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;
// color: #02234380;

// `;
// const High=styled.div`
// width: 31px;
// height: 13px;
// font-family: Open Sans;
// font-size: 12px;
// font-weight: 600;
// line-height: 12.7px;
// text-align: left;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;
// color: #02234380;
// `


//ProgressBar.tsx

export const MainContainerProgressBar = styled.div`
  width: 666px;
  gap: 0px;
  border-radius: 0px 0px 8px 8px;
  opacity: 0px;
  color: #2536a1;
   
`;
export const BarProgess = styled.div`
  height: 14.46px;
  width: 666px;
  top: 38.91px;
  left: 0.36px;
  gap: 0px;
  border-radius: 0px 0px 8px 8px;
  opacity: 0px;
  display: flex;
  align-items: center;      
  color: #2536a1;
`;