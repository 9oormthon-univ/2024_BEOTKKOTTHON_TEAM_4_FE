import { Colors } from '@/styles';
import styled from '@emotion/styled';

export const DevMain = styled.main`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;

  .content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .content-column {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }

  & > .screen {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    & > .section {
      background-color: ${Colors.Ibory};
      padding: 2rem;
      width: 100%;

      & > .title {
        margin: 0rem 0 1.5rem 0;
      }
    }
  }
  & > .full_screen {
    background-color: ${Colors.Ibory};
    padding: 2rem;

    & > .title {
      margin: 0 0 0.7rem 0;
    }

    & > div.full_screen_content {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
