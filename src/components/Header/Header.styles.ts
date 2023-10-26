import styled from 'styled-components'

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: calc(100% - 40px);
  position: absolute;
  top: 32px;
  left: 20px;
`
export const ContactButton = styled.button`
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