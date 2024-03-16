
import MainHeader from '@/app/_component/atom/MainHeader';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  padding-top: 54px; // 헤더의 높이와 같게 설정하여 페이지 컨텐츠가 헤더 아래 시작하도록 함
`;

export default function VacLookup() {
  return (
    <>
      <MainHeader title="백신정보" />
      <PageContainer>
        {/* 페이지 내용 */}
      </PageContainer>
    </>
  );
}
