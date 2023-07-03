import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${ ({theme}) => theme.COLORS.GRAY_300};

  margin: 0 auto 28px;
  border-radius: 10px;

  > input {
    height: 48px;
    width: 120%;

    padding: 12px;

    color: ${ ({theme}) => theme.COLORS.WHITE};

    background: transparent;
    border: 0;

    &:placeholder {
      color: ${ ({theme}) => theme.COLORS.GRAY_300};
    }

  }
  
  > svg {
    margin-left: 16px;
  }
`;