// 본 툴팁은 화면 설계서 (디자인 반영 안됨) 보고 대충 만들어둔 툴팁입니다

import React, { useState } from 'react';
import styled from '@emotion/styled';

const TooltipButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 5px 5px;
  border-radius: 500px;
  color: #000000;
  z-index: 10;
`;

const TooltipContent = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  font-size: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  color: #000000;
  z-index: 1000;
  ${({ show }) => (show ? 'display: block;' : 'display: none;')}
`;

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <TooltipButton
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ?
      </TooltipButton>
      <TooltipContent show={showTooltip}>
        - HPV 국가 예방접종 지원 사업에 참여하여 예방접종 비용을 지원받을 수 있는 의료기관입니다.<br />
        - 의료기관에 따라 접종할 수 있는 백신 종류가 다를 수 있으므로, 보호자는 방문 전에 지정의료기관에서 접종할 수 있는 백신 종류를 확인 후 방문하시기를 바랍니다.<br />
        - 의료기관별로 백신 보유 상황이 다르므로 특정 제품을 접종하고자 하는 경우 방문하실 의료기관에 사전 확인하시기를 바랍니다.
      </TooltipContent>
    </>
  );
};

export default Tooltip;