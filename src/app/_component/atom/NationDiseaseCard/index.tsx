import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface NationDiseaseCardProps {
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

const SubContainer = styled.div`
  width: 134 px;
  height: 22px;
  padding: 4px 7px 4px 7px;
  gap: 10px;
  border-radius: 7px;
  opacity: 0px;
  background: #4196fd;
`;

const Subtitle = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.32px;
  text-align: center;
`;

interface NationDiseaseCardProps {
  id: number;
  diseaseName: string;
  imageUrl: string;
  diseaseSub: string;
}

const NationDiseaseCard: React.FC<NationDiseaseCardProps> = ({
  id,
  diseaseName,
  imageUrl,
  diseaseSub,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/detaildis/${id}`);
  };
  const formattedName =
    diseaseName.length > 8 ? `${diseaseName.slice(0, 8)}...` : diseaseName;

  return (
    <Card>
      <DiseaseImage onClick={handleCardClick}>
        <Image
          src={imageUrl}
          alt={diseaseName}
          width={100}
          height={100}
          layout="responsive"
        />
      </DiseaseImage>
      <DiseaseName>{formattedName}</DiseaseName>
      <SubContainer>
        <Subtitle>{diseaseSub}</Subtitle>
      </SubContainer>
    </Card>
  );
};

export default NationDiseaseCard;
