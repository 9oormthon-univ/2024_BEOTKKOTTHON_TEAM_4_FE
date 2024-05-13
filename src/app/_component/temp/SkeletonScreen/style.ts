import { Colors, fontGenerator } from '@/styles';
import styled from '@emotion/styled';

export const Skeleton = styled.main`
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }

  .ani::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f3f1f1, #eaeaea, #f3f1f1);
    animation: loading 4s infinite linear;
  }

  .wrap {
    margin: 30px 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;

    & > .top {
      overflow: hidden;
      position: relative;
      margin-bottom: 30px;
      width: 140px;
      height: 20px;
      background-color: ${Colors.Gray100};
      border-radius: 10px;
    }

    & > .top_sub {
      overflow: hidden;
      position: relative;
      width: 300px;
      height: 20px;
      background-color: ${Colors.Gray100};
      border-radius: 10px;
    }

    & > .top_middle {
      overflow: hidden;
      position: relative;
      width: 260px;
      height: 20px;
      background-color: ${Colors.Gray100};
      border-radius: 10px;
    }
  }
`;
