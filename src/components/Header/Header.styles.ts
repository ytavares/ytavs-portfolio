import styled from 'styled-components'

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: calc(100% - 40px);
  position: sticky;
  top: 32px;
  left: 20px;
  z-index: 99999;
  @media (max-width: 768px) {
    top: 0;
  }
`
export const HeaderLogoBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  img.iconLogo {
    object-fit: contain;
    max-width: 50px;
    max-height: 50px;
    -webkit-animation: rotate-center 2s cubic-bezier(0.680, -0.550, 0.265, 1.550) infinite both;
    animation: rotate-center 2s cubic-bezier(0.680, -0.550, 0.265, 1.550) infinite both;
    @-webkit-keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }
    @keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }
  }
  img.textLogo {
    object-fit: contain;
    max-width: 150px;
  }
`
export const ContactButton = styled.a`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.color.primary.main};
  width: 150px;
  padding: 5px 0;
  font-family: Bai Jamjuree;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.color.secondary.main};
    color: ${(props) => props.theme.color.secondary.main};
    transition: 0.6s;    
  }
`