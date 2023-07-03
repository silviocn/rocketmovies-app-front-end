import styled from 'styled-components';
import stars from './../../assets/stars.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto; // saying that your page will have 2 rows and the size of each one
  grid-template-areas: // naming the 2 areas
  "header"
  "content";

  > main {
    grid-area: content; // grid area of main is equal to content area
    overflow-y: scroll; // if content doesn't fit screen, then it will show a scroll bar on the side just on main
    padding: 64px 0;

  }

`;

export const Content = styled.div`
  width: 1240px;
  margin: 0 auto; // both parameters is to centralize content

  display: flex;
  flex-direction: column;
  
  > header { // 'Titanic' title
    margin-top: 24px;
    display: flex;
    justify-content: start;
    gap: 36px;
    background: url(${stars}) no-repeat;
    background-position: 15%;

  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  > Section {
    > #tag {
      padding: 8px 16px;
      color: #e5e5e5;
      background-color: #282124;
    }
  }

  > .author {
    margin-top: 12px;
    display: flex; 
    align-items: center;
    gap: 12px;

    > h3 {
    font-size: 16px;
    font-weight: normal;
  }

  > #clock {
      color: ${ ({ theme }) => theme.COLORS.ORANGE};
  }
  }
`;

export const Links = styled.ul`
  a {
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Avatar = styled.div`
  width: 20px;
  height: 20px;

  > img {  
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

`;