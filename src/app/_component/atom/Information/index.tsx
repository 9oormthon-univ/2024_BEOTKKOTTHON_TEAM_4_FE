import React from 'react';
import { InformationContainer, Icon, Text } from './styles';
import { InformationProps } from '../atomType';

const Information: React.FC<InformationProps> = ({
  message,
  containerProps = {},
  iconProps = {},
  textProps = {}
}) => {
  return (
    <InformationContainer style={containerProps}>
      <Icon 
        className={`material-icons ${iconProps.className || ''}`} 
        style={{ color: iconProps.color, marginRight: iconProps.marginRight }}
      >
        check_circle
      </Icon>
      <Text style={textProps}>{message}</Text>
    </InformationContainer>
  );
};

export default Information;