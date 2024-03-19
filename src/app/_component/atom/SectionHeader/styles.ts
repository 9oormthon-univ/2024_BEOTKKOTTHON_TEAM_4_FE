import styled from '@emotion/styled';

export const SectionHeaderContainer = styled.div`
  display: flex;
  height: 52px;
  width: 100%;
`;

export const Section = styled.div`
  flex: 1;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e8eb; /* 기본값 */
  color: #8b95a1; /* 기본값 */
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400; /* 기본값 */
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  /* 선택된 섹션에 대한 스타일은 컴포넌트 내에서 조건부로 적용 */
`;
