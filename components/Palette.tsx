import styled from "styled-components";
import useTheme from "../lib/useTheme";

const Box = styled.div.attrs<{ color: string }>((props) => ({
  background: props.color,
}))`
  width: 16px;
  height: 16px;
  background-color: ${({ color }) => color};
`;
const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
`;

const Palette: React.FC = () => {
  const [theme] = useTheme();

  return (
    <Container>
      {theme.palette.map((color, index) => (
        <Box key={index} color={color} />
      ))}
    </Container>
  );
};

export default Palette;
