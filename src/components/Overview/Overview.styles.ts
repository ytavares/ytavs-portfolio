import styled from 'styled-components';

export const OverviewBox = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 630px;
`
export const TitleOverview = styled.h2`
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  margin-bottom: 14px;
`
export const DescriptionOverview = styled.p`
  color: ${(props) => props.theme.color.grey.main};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  margin-bottom: 14px;
`
export const LinkOverview = styled.a`
  color: ${(props) => props.theme.color.primary.main};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.6s;
  max-width: fit-content;
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
    object-fit: "contain";
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
`