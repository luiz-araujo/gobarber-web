import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    align-items: center;
    background: #28262e;
    display: flex;
    height: 144px;

    div {
      margin: 0 auto;
      max-width: 1120px;
      width: 100%;

      svg {
        color: #999951;
        height: 25px;
        width: 25px;
      }
    }
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -176px auto 0;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      font-size: 20px;
      margin-bottom: 24px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  margin-bottom: 32px;
  position: relative;

  img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  label {
    align-items: center;
    background: #ff9000;
    bottom: 0px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    height: 48px;
    justify-content: center;
    right: 0;
    transition: background-color 0.2s;
    position: absolute;
    width: 48px;

    input {
      display: none;
    }

    svg {
      color: #312e38;
      height: 20px;
      width: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
