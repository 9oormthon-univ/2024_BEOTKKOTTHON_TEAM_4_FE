import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card, DiseaseImage, DiseaseName,  SubContainer, Subtitle  } from  './style'

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
