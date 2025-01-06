import styled from "styled-components";

export const Triangular = styled.div`
width: 310px;
height: 600px;
gap: 0px;
opacity: 0px;

&::after {
  content: ''; 
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid #f6f8f9; 
  margin-left: 18px;
  margin-top: 9px;
}

&::before {
     content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid #d7dfe3;
  margin-left: 18px;
  margin-top: 7.5px;
`;

export const MainContainer = styled.div`
  width: 310px;
  height: 600px;
  position: absolute;
  top: 28px;
  left: 7px;
  gap: 0px;
  background-color: #f6f8f9;
  border: 1px solid #d7dfe3;
  box-shadow: 0px 4px 5px 0px #0000001a;
`;

export const IntentScore = styled.div`
  width: 193px;
  height: 21px;
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20.3px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
  margin-top: 14px;
  margin-left: 20px;
`;
export const HrLine = styled.hr`
  width: 308px;
  height: 0px;
  border: 1px solid #a7bcc533;
  margin-top: 18px;
`;
export const ContentContainer = styled.div`
  width: 259px;
  height: 481px;
  gap: 18px;
  margin-top: 20px;
  margin-left: 24px;
`;
export const Proteins = styled.div`
  width: 259px;
  height: 98px;
`;
export const ProteinContent = styled.div`
  width: 217.38px;
  height: 16px;
  gap: 0px;
  opacity: 1px;
  font-family: Open Sans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
`;
export const ProteinProgress = styled.div`
  width: 259px;
  height: 74px;
  gap: 11px;
  border-radius: 0px 16px 16px 0px;
  background-color: #ffffff;
  margin-top: 8px;
`;
export const Vitamins = styled.div`
  width: 259px;
  height: 145.4px;
  gap: 0px;
  margin-top: 18px;
`;
export const VitaminContent = styled.div`
  width: 92.5px;
  height: 16.71px;
  gap: 0px;
  opacity: 0px;
  font-family: Open Sans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
`;
export const VitaminProgress = styled.div`
  width: 259px;
  height: 121.17px;
  gap: 11px;
  border-radius: 0px 16px 16px 0px;
  background-color: #ffffff;
  margin-top: 8px;
`;
export const Omega = styled.div`
  width: 259px;
  height: 97.21px;
  margin-top: 18px;
`;
export const OmegaContent = styled.div`
  width: 171.13px;
  height: 16px;
  gap: 0px;
  opacity: 0px;
  font-family: Open Sans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
`;
export const OmegaProgress = styled.div`
  width: 259px;
  height: 73px;
  gap: 11px;
  border-radius: 0px 16px 16px 0px;
  background-color: #ffffff;
  margin-top: 8px;
`;
export const Minerals = styled.div`
  width: 259px;
  height: 77.39px;
  padding: 0px;
  gap: 0px;
  margin-top: 18px;
`;
export const MineralsContent = styled.div`
  width: 89.03px;
  height: 16px;
  opacity: 0px;
  font-family: Open Sans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16.34px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
`;
export const MineralsProgress = styled.div`
  width: 259px;
  height: 53px;
  gap: 11px;
  border-radius: 0px 16px 16px 0px;
  background-color: #ffffff;
  margin-top: 8px;
`;
export const LowContainer = styled.div`
  width: 141px;
  height: 13px;
  gap: 0px;
  opacity: 0px;
  margin-left: 105px;
  margin-top: 2px;
  margin-bottom: 6px;
  color: #002244;
  display: flex;
`;
export const LowContent = styled.div`
  width: 20px;
  height: 13px;
  opacity: 0.8px;
  font-family: Open Sans, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12.09px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
`;
export const AverageContent = styled.div`
  width: 38px;
  height: 13px;
  opacity: 0.8px;
  font-family: Open Sans, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12.09px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
  margin-left: 32px;
`;
export const HighContent = styled.div`
  width: 22px;
  height: 13px;
  gap: 0px;
  opacity: 0.8px;
  font-family: Open Sans, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 12.09px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #002244;
  margin-left: 29px;
`;



export const BarProgress = styled.div`
  width: 146px;
  height: 9px;
  border-radius: 0px 8px 8px 0px;
  gap: 14px;
  display: flex;
`;




export const ProgressListContainer = styled.div`
width: 225.96px;
height: 47.6px;
margin-left: 16.52px;
display: flex;
gap: 4.96px;
`;

export const ContainerTopicName = styled.div`
width: 69px;
height: 47px;
padding: 6px 0px;
display: flex;
flex-direction: column;
gap: 9px;
text-overflow: ellipsis;
`;
export const TopicName = styled.div`
width: 69px;
height: 13px;
font-family: Open Sans, sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 12.09px;
text-align: right;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #002244;
`;
export const Line1 = styled.hr`
width: 47.6px;
height: 0px;
position: absolute;
top: 135px;
left: 88px;
gap: 0px;
opacity: 0.5px;
transform: rotate(90deg);
border: 0.1px solid #0223435e;
`;
export const Line1Vitamin = styled(Line1)`
width: 80px;
position: absolute;
top: 268px;
left: 72px;
`;
export const Line1Omega = styled(Line1)`
width: 47px;
position: absolute;
top: 414px;
left: 90px;
`;
export const Line1Minerals = styled(Line1)`
width: 25px;
position: absolute;
top: 519px;
left: 100px;
`;
export const Line2 = styled(Line1)`
position: absolute;
top: 135px;
left: 114px;
border-style: dashed;
`;
export const Line2Vitamins = styled(Line1Vitamin)`
position: absolute;
top: 268px;
left: 98px;
border-style: dashed;
`;
export const Line2Omega = styled(Line1Omega)`
position: absolute;
top: 414px;
left: 116px;
border-style: dashed;
`;
export const Line2Minerals = styled(Line1Minerals)`
position: absolute;
top: 519px;
left: 126px;
border-style: dashed;
`;
export const Line3 = styled(Line2)`
position: absolute;
top: 135px;
left: 177.5px;
border-style: dashed;
`;
export const Line3Vitamins = styled(Line2Vitamins)`
position: absolute;
top: 268px;
left: 160px;
`;
export const Line3Omega = styled(Line2Omega)`
position: absolute;
top: 414px;
left: 178px;
`;
export const Line3Minerals = styled(Line2Minerals)`
position: absolute;
top: 519px;
left: 188px;
`;

export const Line4 = styled(Line3)`
position: absolute;
top: 135px;
left: 236px;
border-style: dashed;
`;
export const Line4Vitamins = styled(Line3Vitamins)`
position: absolute;
top: 268px;
left: 220px;
`;
export const Line4Omega = styled(Line3Omega)`
position: absolute;
top: 414px;
left: 238px;
`;
export const Line4Minerals = styled(Line3Minerals)`
position: absolute;
top: 519px;
left: 248px;
`;

export const ProgressBarContainerProtein = styled.div`
width: 152px;
height: 32px;
margin-top: 7px;
display: flex;
flex-direction: column;
gap: 14px;
`;