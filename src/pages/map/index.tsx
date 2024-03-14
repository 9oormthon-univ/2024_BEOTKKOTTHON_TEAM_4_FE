import styled from '@emotion/styled';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  background: linear-gradient(128.77deg, #90C9F6 9.11%, #5DABFF 56.8%);
`;

const Title = styled.h1`
  font-size: 48px;
  color: #FFFFFF;
`;

export default function Map() {
  return (
    <Main>
      <Title>백고미고미</Title>
    </Main>
  );
}