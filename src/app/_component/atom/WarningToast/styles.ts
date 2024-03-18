import styled from '@emotion/styled';

export const ToastContainer = styled.div`
  width: 353px;
  min-height: 66px;
  padding: 15px 20px;
  gap: 14px;
  border-radius: 18px;
  background: #ffeeef;
  color: #ff5761;
  display: flex;
  align-items: center;
  position: fixed;
  left: 10px;
  margin-top: 10px;
  z-index: 1000;
`;

export const ToastMessage = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  margin-left: 14px;
`;
