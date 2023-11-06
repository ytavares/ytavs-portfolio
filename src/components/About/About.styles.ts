import styled from 'styled-components';

export const AboutBox = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 573px;
`
export const AboutSecondContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 541px;
`
export const AboutTitle = styled.h2`
  color: #FFF;
  font-family: Bai Jamjuree;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  z-index: 500;
  -webkit-animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
              transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    font-size: 38px;
    line-height: 36px;
    text-align: center;
  }
`
export const AboutSubtitle = styled.p`
  color: ${(props) => props.theme.color.primary.main};
  font-family: Bai Jamjuree;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 16px 0 0 0;
  z-index: 500;
  /* -webkit-animation: slide-in-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  }
  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
              transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  } */
  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
    margin-bottom: 40px;
  }
`
export const AboutText = styled.p`
  color:${(props) => props.theme.color.grey.main};
  font-family: Bai Jamjuree;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  z-index: 500;
  /* -webkit-animation: puff-in-center 1.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: puff-in-center 1.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  @-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }
  @keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
              transform: scale(2);
      -webkit-filter: blur(4px);
              filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-filter: blur(0px);
              filter: blur(0px);
      opacity: 1;
    }
  }
  &.second {
    margin-top: 16px;
  } */
  @media (max-width: 768px) {
    text-align: center;
    font-size: 18px;
  }
`
export const AboutImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 567px;
  max-height: 563px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 400px;
      max-height: 400px;
      margin-bottom: 40px;
    }
  }
`