import styled from 'styled-components'

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  width: 200px;
  padding: 11px 0;
  font-family: Bai Jamjuree;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`