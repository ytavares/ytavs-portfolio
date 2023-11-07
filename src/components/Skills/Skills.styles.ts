import styled from 'styled-components';

export const SkillsBox = styled.section `
  .fp-overflow {
    height: 100vh;
    display: flex;
    max-width: 940px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    gap: inherit;
    margin-top: 120px;
  }
`
export const SkillsSubtitle = styled.p`
  color: ${(props) => props.theme.color.primary.main};
  text-align: center;
  font-family: Bai Jamjuree;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 14px;
    text-align: center;
  }
`
export const SkillsTitle = styled.h2`
  color: #FFF;
  text-align: center;
  font-family: Bai Jamjuree;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  text-transform: uppercase;
  margin: 10px 0 20px;
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    text-align: center;
    margin: 10px 0 20px 0;
  }
`
export const SkillsDescription = styled.p`
  color: ${(props) => props.theme.color.grey.main};
  text-align: center;
  font-family: Bai Jamjuree;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 40px 0;
  @media (max-width: 768px) {
    margin-bottom: 80px;
    font-size: 16px;
    line-height: 22px;
  }
`
export const SkillsIcons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`
export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  @media (max-width: 768px) {
    width: 80px;
  }
`
export const IconItemTitle = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Bai Jamjuree;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
export const IconItemSVG = styled.div`
  svg {
    font-size: 60px;
    line-height: 60px;
    width: 60px;
    height: 60px;
    color: #CCCCCC;
    @media (max-width: 768px) {
      width: 35px;
      height: 35px;      
    }
  }
`