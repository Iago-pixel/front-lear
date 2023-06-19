import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid #74e4e5;
  width: 28rem;
  height: 15rem;
  padding: 1rem;
  background-color: ${({ background }) => background};
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ color }) => color};
  }
  h1 {
    color: ${({ color }) => color};
    margin: 2rem 0;
  }
  p {
    color: ${({ color }) => color};
  }
  img {
    width: 4rem;
  }
`;
