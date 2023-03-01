import styled from "styled-components";

export const LineContainer = styled.div`
  display: flex;
  max-width: 21rem;
  justify-content: center;
  align-items: center;
  margin: 2px;
`;

export const HrStyled = styled.hr`
  width: 117px;
  border: none;
  height: 2px;
  background: rgb(229 231 235);

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`;

export const LineTextBox = styled.div`
display:flex;
border: 2px solid rgb(229 231 235);
text-center;
items:center;
padding: 2px;
border-radius:5px;
font-size: 0.875rem; 
line-height: 1.25rem; 
font-weight: 500;
color: rgb(156 163 175);;
`;
