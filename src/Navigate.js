import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigate() {
  return (
    <BodyWrapper>
      <ContainerWrapper>
        <h1>UNityREact</h1>
        <NavWrapper>
          <ul>
            <li>
              <Link to="/" style={linkStyle}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/faraway" style={linkStyle}>
                <span>Faraway</span>
              </Link>
            </li>
            <li>
              <Link to="/quotegenerator" style={linkStyle}>
                <span>Q-Generator</span>
              </Link>
            </li>
          </ul>
        </NavWrapper>
      </ContainerWrapper>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");
  background-color: #6f1d1b;
  background-image: url("images/multiblend.jpg");

  background-size: cover;

  height: 100vh;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

const ContainerWrapper = styled.div`
  padding: 16px 32px;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    font-size: 64px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    letter-spacing: 0.2rem;
    @media (max-width: 900px) {
      font-size: 48px;
    }
    @media (max-width: 700px) {
      font-size: 32px;
    }
  }
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "#ffe6a7",
};

const NavWrapper = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    span {
      font-size: 28px;
    }

    @media (max-width: 900px) {
      font-size: 32px;
      grid-template-columns: repeat(3, 1fr);
      span {
        font-size: 20px;
      }
    }
    @media (max-width: 700px) {
      font-size: 28px;
      grid-template-columns: repeat(2, 1fr);
      span {
        font-size: 18px;
      }
    }
  }
`;

export default Navigate;
