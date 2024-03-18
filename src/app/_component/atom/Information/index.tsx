import React from 'react';
import { InformationContainer, Text } from './styles';
import { InformationProps } from '../atomType';
import { Images } from '@globalStyles';
import Image from 'next/image';

const Information: React.FC<InformationProps> = ({
  message,
  containerProps = {},
  iconProps = {},
  textProps = {},
}) => {
  return (
    <InformationContainer style={containerProps}>
      <Image
        src={Images.info_check}
        alt="Information Check Icon"
        style={{ marginRight: '10px', ...iconProps }}
      />
      <Text style={textProps}>{message}</Text>
    </InformationContainer>
  );
};

export default Information;
