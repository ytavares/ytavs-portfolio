import styled from 'styled-components';

export const ContactBox = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`
export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100%;
`
export const SocialsContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const SocialItem = styled.a`
  background: #1E1E1E;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(50% - 20px);
  height: 200px;
  svg {
    color: #CCCCCC;
    font-size: 48px;
  }
  &:hover {
    svg, p {
      color: ${(props) => props.theme.color.primary.main};
      transition: 1s; 
    }
  }
`
export const SocialTitle = styled.p`
  color: #FFF;
  margin: 0;
  margin-top: 20px;
  text-align: center;
  font-family: Bai Jamjuree;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`
export const ContactTitle = styled.h2`
  color: ${(props) => props.theme.color.primary.main};
  text-align: center;
  font-family: Bai Jamjuree;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  
  -webkit-animation: puff-in-center 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: puff-in-center 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
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
  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 36px;
    text-align: center;
  }
`
export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 630px;
`

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.8em;
    color: #fff;
    top: -11px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
    background: #00cfd5;
    padding: 3px 8px;
    left: 25px;
    border-radius: 50px;
    font-weight: bold;
  }
  .right { 
    float: right; 
  }
  .full {
    width: 650px;
    max-width: 100%;
  }
  input,textarea {
    width: 100%;
    padding: 30px;
    border: 0;
    font-size: 1em;
    background-color: #2d2d2d;
    color: #fff;
    border-radius: 50px;
  }
  input:focus,textarea:focus { 
    outline: 0; 
  }
  input:focus ~ span,textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
  }
  input[type=checkbox] + label {
    color: #ccc;
    font-style: italic;
  } 
  input[type=checkbox]:checked + label {
    color: #f00;
    font-style: normal;
  }
  textarea {
    width: 100%;
    min-height: 10em;
  }
  
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
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
export const DualInputForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const InputForm = styled.div`
  float: left;
  width: 295px;
  margin: 1em 0;
  position: relative;
  border-radius: 4px;
  label {
    color: #999;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
  }
  @media only screen and (max-width: 768px){     
    width:100%; 
  }
`
export const ButtonForm = styled.button`
  width: 160px;
  color: #fff;
  font-size: 1.2em;    
  display: inline-block;
  text-align: center;
  padding: 15px 35px;
  border-radius: 60px;
  background: ${(props) => props.theme.color.primary.main};
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06), 0 2px 10px 0 rgba(0,0,0,0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  border:none;
  &:hover {
    transform: translateY(10px);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
    0 1px 1px 0 rgba(0,0,0,0.09);
    background: ${(props) => props.theme.color.secondary.main};
    transition: 0.6s;     
  }
  @media (max-width: 768px) {
    width:100%;
    float: none;
    text-align:center;
  }
`

