import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface DiseaseCardProps {
  diseaseName: string;
  imageUrl: string;
}

const Card = styled.div`
  width: 200px;
  height: auto;
  padding: 20px 21.77px;
  gap: 20px;
  border-radius: 14px 0px 0px 0px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiseaseImage = styled.div`
  width: 100px;
  height: 100px;
  gap: 0px;
`;

const DiseaseName = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: center;
  color: #333d4b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

interface DiseaseCardProps {
  id: number; 
  diseaseName: string;
  imageUrl: string;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ id, diseaseName, imageUrl }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/detaildis/${id}`);
  };
  const formattedName = diseaseName.length > 8 ? `${diseaseName.slice(0, 8)}...` : diseaseName;

  return (
    <Card>
      <DiseaseImage onClick={handleCardClick}>
        <Image src={imageUrl} alt={diseaseName} width={100} height={100} layout="responsive" />
      </DiseaseImage>
      <DiseaseName>{formattedName}</DiseaseName>
    </Card>
  );
};

export default DiseaseCard;
