import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.img`
  width: 10em;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const NavLink = styled(Link)`
  color: #0074d9;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, Logo, Title, NavLink };
