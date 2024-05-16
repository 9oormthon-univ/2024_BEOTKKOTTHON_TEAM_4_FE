import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  margin-bottom: 80px;
`;

export const UserGreeting = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #191f28;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: -80px;
`;

export const VaccineCard = styled.div`
  width: 353px;
  height: auto;
  padding: 20px;
  border-radius: 20px;
  background: #f9fafb;
  border: 1px solid #f2f4f6;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const VaccinationStatus = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #6b7684;
  margin-bottom: 10px;
`;

export const InfectionName = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  color: #333d4b;
`;

export const MapButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
`;
