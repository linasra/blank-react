import { Container, Logo, Title, NavLink } from "views/viewStyles";
import ReactImg from "assets/react.png";

function Home() {
  return (
    <Container>
      <Logo src={ReactImg} alt="logo" />
      <Title>Blank - React</Title>
      <NavLink to="/about/">About</NavLink>
    </Container>
  );
}

export default Home;
