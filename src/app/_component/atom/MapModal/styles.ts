import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 373px;
  height: auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 22px;
  color: #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
  margin-bottom: -400px;
`;

export const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  margin-bottom: 20px;

  ::before {
    content: '';
    width: 60px;
    height: 5px;
    border-radius: 5px;
    background: #d9d9d9;
  }
`;

export const MainSection = styled.div`
  width:321px
  height:48px;
  padding: 6px 0px 10px 0px;
  gap: 10px;
  opacity: 0px;
`;

export const HospitalName = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  color: #333d4b;
  margin-bottom: 20px;
`;

export const Major = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  color: #4196fd;
  text-align: right;
  margin-top: -20px;
  margin-right: 5px;
`;

export const SubSection = styled.div`
  display: flex;
  align-items: center;
  width: 321px;
  padding: 4px 0px 4px 0px;
  gap: 10px;
`;

export const HospitalNow = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
  text-align: left;
  color: #333d4b;
`;

export const HospitalHow = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.09px;
  text-align: left;
  color: #4e5968;
`;

export const Address = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  color: #4e5968;
  text-align: left;
  margin-top: 10px;
`;
