import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const JsonText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 56px;
  width: max-content;
  max-width: 100%;
  margin-bottom: 16px;
`;
