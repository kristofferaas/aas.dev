import styled from "styled-components";

const Page = styled.main.attrs((props) => ({
  background: props.theme.palette[0],
}))`
  background-color: ${({ theme }) => theme.palette[0]};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Page;
