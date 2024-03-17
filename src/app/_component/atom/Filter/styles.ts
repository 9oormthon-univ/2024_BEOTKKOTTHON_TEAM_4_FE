import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 33px;
  padding: 8px 12px;
  background: #f2f4f6;
  border-radius: 100px;
  border: none;
  cursor: pointer;
`;

export const textStyle = css`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
`;

export const FilterText = styled.span`
  ${textStyle};
  font-weight: 500;
  color: #8b95a1;
`;

export const SelectedFilterText = styled.span`
  ${textStyle};
  font-weight: 600;
  color: #4196fd;
`;
