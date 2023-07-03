import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  position: fixed;
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 105px;
  width: 100%; // 100% of what's available on the screen

  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${ ({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 48px;

  
  background-color: none;

  > h1 {
    font-size: 24px;
    color: ${ ({ theme }) => theme.COLORS.ORANGE };
  }
`;

export const Search = styled.div`
  padding: 64px 64px 0;
  margin-top: -36px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 48px;

  > img { // the usage of ">" is to specify that the settings will be for the img in Profile
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 16px;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    span { // settings for span inside div
      font-size: 14px;
      color: ${ ({ theme }) => theme.COLORS.GRAY_100};
    }

    strong { // settings for span inside div
      font-size: 18px;
      color: ${ ({ theme }) => theme.COLORS.WHITE};
    }
  }
`;