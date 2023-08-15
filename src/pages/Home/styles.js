import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800 };

  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const Content = styled.div`
  margin-top: 90px;
  padding: 12px 120px;  

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto; // only appears scroll bar if needed

  
  #Links {
    background-color: ${ ({ theme }) => theme.COLORS.ORANGE };
    color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};

    width: 210px;
    height: 50px;

    cursor: pointer;

    border-radius: 8px;
    padding: 10px;

    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;
