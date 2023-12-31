import styled from 'styled-components';

export const FooterBox = styled.section`
  background: #0C2129;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  .fp-watermark {
    display: none!important;
  }
`
export const FooterText = styled.p`
  margin: 0;
  color: #FFF;
  text-align: center;
  font-family: Bai Jamjuree;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 54px;
`