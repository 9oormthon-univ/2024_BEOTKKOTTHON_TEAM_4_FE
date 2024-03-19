import React, { useState } from 'react';
import styled from '@emotion/styled';

const AccordionContainer = styled.div`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #F2F4F6;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const AccordionItem = styled.div`
  border-radius: 10px;
  margin-bottom: 10px;
  background: #FFFFFF;
`;

const Question = styled.div`
  padding: 16px 7px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: #4E5968;
  cursor: pointer;
`;

const Answer = styled.div`
  padding: 13px 20px;
  background: #F2F4F6;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #6B7684;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

const Accordion = ({ qaList }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {qaList.map((item, index) => (
        <AccordionItem key={item.id}>
          <Question onClick={() => toggleAccordion(index)}>
            {item.ques}
          </Question>
          <Answer isActive={activeIndex === index}>{item.ans}</Answer>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
