import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

const Title = styled.Text`
  font-size: 22px;
  color: black;
`;

export default function StyledComponent() {
  return (
    <Container>
      <Title>Hello Styled Components</Title>
    </Container>
  );
}
