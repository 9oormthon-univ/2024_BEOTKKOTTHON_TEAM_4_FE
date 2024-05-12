import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Images } from '@globalStyles';

interface AnswerProps {
  isActive: boolean;
}

interface QAItem {
  id: number;
  ques: string;
  ans: string;
}

interface AccordionProps {
  qaList: QAItem[];
}

const AccordionContainer = styled.div`
  width: 100%;
  padding: 14px 20px;
  border: 1px solid #F2F4F6;
  border-radius: 20px;
  margin-top: 20px;
`;

const AccordionItem = styled.div`
  border-radius: 10px;
  margin-bottom: 10px;
  background: #FFFFFF;
`;

const QuestionContainer = styled.div`
  padding: 16px 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const QuestionText = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  color: #4e5968;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Answer = styled.div<AnswerProps>`
  padding: ${({ isActive }) => (isActive ? '13px 20px' : '0 20px')};
  max-height: ${({ isActive }) => (isActive ? '500px' : '0')};
  background: #F2F4F6;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #6B7684;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

const Accordion: React.FC<AccordionProps> = ({ qaList }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {qaList.map((item, index) => (
        <AccordionItem key={item.id}>
          <QuestionContainer onClick={() => toggleAccordion(index)}>
            <QuestionText>
              <Image
                src={activeIndex === index ? Images.ico_pin_selec : Images.ico_pin_unselec}
                alt="Pin Icon"
                width={20}
                height={20}
              />
              {item.ques}
            </QuestionText>
            <Image
              src={activeIndex === index ? Images.dropdown_up : Images.dropdown_down}
              alt="Dropdown Icon"
              width={20}
              height={20}
            />
          </QuestionContainer>
          <Answer isActive={activeIndex === index}>{item.ans}</Answer>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
