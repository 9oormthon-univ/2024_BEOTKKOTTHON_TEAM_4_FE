import styled from "@emotion/styled";

export const SectionHeaderContainer = styled.div`
  display: flex;
  height: 52px;
  width: 100%;
`;

export const Section = styled.div`
  flex: 1;
  padding: 10px 20px;
  border-bottom: 1px solid
    ${({ isSelected }) => (isSelected ? "#333D4B" : "#E5E8EB")};
  color: ${({ isSelected }) => (isSelected ? "#333D4B" : "#8B95A1")};
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
`;
