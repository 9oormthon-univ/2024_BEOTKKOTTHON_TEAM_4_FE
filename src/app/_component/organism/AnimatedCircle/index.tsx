import React from 'react';
import { css, keyframes } from '@emotion/react';

// 원의 둘레 계산 (2 * π * r), r = 50
const circumference = 2 * Math.PI * 50;

const drawCircleAnimation = keyframes`
  from {
    stroke-dasharray: 0, ${circumference};
    stroke-dashoffset: ${circumference / 4};
  }
  to {
    stroke-dasharray: ${circumference}, 0;
    stroke-dashoffset: ${circumference / 4};
  }
`;

// SVG 원형 스타일
const circleStyle = css`
  width: 100px;
  height: 100px;
  display: block;
  margin: 20px auto;

  circle {
    fill: none;
    stroke: #3498db;
    stroke-width: 4;
    stroke-dasharray: 0, ${circumference};
    stroke-dashoffset: ${circumference / 4}; // 시작점을 원의 상단 가운데로 설정
    animation: ${drawCircleAnimation} 2s linear forwards;
  }
`;

export const AnimatedCircle = () => {
  return (
    <div css={circleStyle}> {/* Emotion의 css prop 사용 */}
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" />
      </svg>
    </div>
  );
};
