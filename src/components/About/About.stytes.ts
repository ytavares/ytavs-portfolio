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
  @media (max-width: 768px) {
    font-size: 50px;
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
  @media (max-width: 768px) {
    text-align: center;
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
  &.second {
    margin-top: 16px;
  }
`
export const AboutImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 567px;
  max-height: 563px;
  image {
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
  }
`