import styled from "@emotion/styled";

export const InformationContainer = styled.div`
  height: ${({ height }) => height || "70px"};
  padding: ${({ padding }) => padding || "15px 20px"};
  gap: ${({ gap }) => gap || "14px"};
  background: ${({ background }) => background || "#F2F4F6"};
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  color: ${({ color }) => color || "#6B7684"};
  margin-right: ${({ marginRight }) => marginRight || "10px"};
`;

export const Text = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: ${({ fontSize }) => fontSize || "12px"};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  line-height: ${({ lineHeight }) => lineHeight || "20px"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "-0.03em"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  color: ${({ color }) => color || "#6B7684"};
`;
