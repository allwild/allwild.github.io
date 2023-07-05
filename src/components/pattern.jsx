import styled, { keyframes } from "styled-components";

export default function Pattern() {
  return (
    <PatternContainer>
      <LineLeft className="line"></LineLeft>
      <LineLeft className="line"></LineLeft>
      <LineRight className="line"></LineRight>
      <LineLeft className="line"></LineLeft>
      <LineLeft className="line"></LineLeft>
      <LineRight className="line"></LineRight>
      <LineLeft className="line"></LineLeft>
      <LineLeft className="line"></LineLeft>
      <LineLeft className="line"></LineLeft>
      <LineRight className="line"></LineRight>
      <LineLeft className="line"></LineLeft>
      <LineRight className="line"></LineRight>
      <LineLeft className="line"></LineLeft>
      <LineRight className="line"></LineRight>
      <LineLeft className="line"></LineLeft>
      <LineLeft className="line"></LineLeft>
      <LineRight className="line"></LineRight>
    </PatternContainer>
  );
}

const waveAnimation = keyframes`
  0% {
    width: 150%;
  }
  50% {
    width: 223%;
  }
  100% {
    width: 150%;
  }
`;

const PatternContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  width: 50%;
  transform: skew(-20deg);
  

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
`;

const LineLeft = styled.div`
  width: 120%;
  height: 15px;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 10%,
    rgba(132, 0, 255),
    rgba(0, 0, 0, 1) 100%
  );
  animation: ${waveAnimation} 8s infinite alternate;
`;

const LineRight = styled.div`
  width: 130%;
  height: 20px;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 1) 100%,
    rgb(20, 219, 153) 0%,
    rgba(0, 0, 0, 1) 100%,
    
  );
  animation: ${waveAnimation} 8s infinite alternate;
`;
