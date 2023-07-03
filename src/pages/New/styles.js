import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;

  display: grid;
  grid-template-rows: 105px 1024px;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    
  }

  .tags {
    display: flex;
    justify-content: start;
    align-content: center;
    padding: 16px 16px 8px;
    border-radius: 8px;
    background-color: #0D0C0F;
    gap: 12px;
    flex-wrap: wrap; // distribute items to next line if doesn't fit in just one line
  }

`;

export const Form = styled.form`
  max-width: 1224px;
  margin: 38px auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  > .title_note { // 'New Movie' and 'Go back' link box
    display: flex;
    place-items: center;
    gap: 40px;
  }

  > header { // 'New Movie' title
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    
    margin-bottom: 36px;
    
    a { // 'Go back' link
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      color: ${ ({ theme }) => theme.COLORS.ORANGE};
    }
  }

  .buttons{ // 'Delete Movie' and 'Save'
    display: flex;
    width: 100%;
    margin: auto 0px;
    justify-content: space-around;
    
  }

  Button:first-child {
    background-color: #0D0C0F;
    color: ${ ({ theme }) => theme.COLORS.ORANGE};
    margin-right: 40px;
  }

`;