import styled from 'styled-components';

export const OverviewBox = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 630px;
  @media (min-width: 768px) and (max-width: 1300px){
    max-width: 100%;
  }
`
export const TitleOverview = styled.h2`
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  margin-bottom: 14px;
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
`
export const DescriptionOverview = styled.p`
  color: ${(props) => props.theme.color.grey.main};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-bottom: 14px;
  -webkit-animation: slide-in-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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
  }
`
export const LinkOverview = styled.a`
  color: ${(props) => props.theme.color.primary.main};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.6s;
  max-width: fit-content;
  -webkit-animation: puff-in-center 1.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
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
  &:hover {
    color: ${(props) => props.theme.color.secondary.main};
  }
`
export const PcOverview = styled.div`
  max-width: 630px;
  max-height: 728px;
  width: 100%;
  height: auto;
  position: relative;
  img {
    max-width: 100%;
  }
  .tag {
    position: absolute;
    top: 38%;
    left: 27%;
    max-width: fit-content;
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-20px);
      }
      100% {
        transform: translatey(0px);
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1300px){
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`