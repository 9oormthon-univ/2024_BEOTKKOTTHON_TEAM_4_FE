import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

const hospitals = [
  { name: '다보스종합병원', lat: 37.233036, lng: 127.210669 },
  { name: '고려가정의원', lat: 37.314665, lng: 127.088684 },
  { name: '고려메디웰의원', lat: 37.319962, lng: 127.062170 },
  { name: '광교미소모아내과의원', lat: 37.296958, lng: 127.068652 },
  { name: '광교바른내과의원', lat: 37.296563, lng: 127.069479 },
  { name: '광교연세소아청소년과의원', lat: 37.296790, lng: 127.068056 },
  { name: '김병연소아청소년과의원', lat: 37.298382, lng: 127.069968 },
  { name: '김종화푸른소아과의원', lat: 37.324467, lng: 127.094711 },
  { name: '김진영내과의원', lat: 37.323318, lng: 127.077351 },
  { name: '꾸러기소아청소년과의원', lat: 37.308922, lng: 127.085384 },
  { name: '노블산부인과의원', lat: 37.306693, lng: 127.084855 },
  { name: '동천연세소아청소년과의원', lat: 37.335601, lng: 127.093379 },
  { name: '동천이안소아청소년과의원', lat: 37.336398, lng: 127.091651 },
  { name: '메디코아내과의원', lat: 37.323913, lng: 127.095301 },
  { name: '명가정의학과의원', lat: 37.335341, lng: 127.108661 },
  { name: '박수언소아청소년과의원', lat: 37.331978, lng: 127.122816 },
  { name: '박지영산부인과의원', lat: 37.322536, lng: 127.095538 },
  { name: '봄소아청소년과의원', lat: 37.323121, lng: 127.078023 },
  { name: '삼성굿모닝의원', lat: 37.335983, lng: 127.093245 },
  { name: '삼성박내과의원', lat: 37.313384, lng: 127.078800 },
  { name: '삼성코랄이비인후과의원', lat: 37.335964, lng: 127.091821 },
  { name: '새연세소아청소년과의원', lat: 37.321309, lng: 127.092004 },
  { name: '성복상쾌한이비인후과의원', lat: 37.314420, lng: 127.084099 },
  { name: '성복서울아산소아청소년과의원', lat: 37.315790, lng: 127.074625 },
  { name: '성복이안소아청소년과의원', lat: 37.312696, lng: 127.079788 },
  { name: '성복행복한소아청소년과의원', lat: 37.315305, lng: 127.086773 },
  { name: '수지21세기의원', lat: 37.308436, lng: 127.076207 },
  { name: '수지메디이음내과의원', lat: 37.308527, lng: 127.084948 },
  { name: '수지미래산부인과의원', lat: 37.314996, lng: 127.086419 },
  { name: '수지바름의원', lat: 37.319760, lng: 127.083350 },
  { name: '수지본내과의원', lat: 37.328355, lng: 127.067970 },
  { name: '수지사랑내과의원', lat: 37.333230, lng: 127.093178 },
  { name: '수지아산내과의원', lat: 37.323137, lng: 127.078023 },
  { name: '수지퍼스트내과의원', lat: 37.339778, lng: 127.094075 },
  { name: '에스더산부인과의원', lat: 37.322248, lng: 127.095975 },
  { name: '연세가정의학과의원', lat: 37.328298, lng: 127.114545 },
  { name: '연세노블S의원', lat: 37.328348, lng: 127.113788 },
  { name: '연세메디웰내과의원', lat: 37.331951, lng: 127.122114 },
  { name: '연세소아청소년과의원', lat: 37.319909, lng: 127.087650 },
  { name: '열린이비인후과의원', lat: 37.312593, lng: 127.079796 },
  { name: '예담이비인후과의원', lat: 37.317540, lng: 127.068920 },
  { name: '용한외과의원', lat: 37.324550, lng: 127.097602 },
  { name: '우리들내과의원', lat: 37.302168, lng: 127.077902 },
  { name: '우리들이비인후과의원', lat: 37.328601, lng: 127.114173 },
  { name: '우리이비인후과의원', lat: 37.340276, lng: 127.096188 },
  { name: '위드준소아청소년과의원', lat: 37.325347, lng: 127.110002 },
  { name: '위편한내과의원', lat: 37.331515, lng: 127.123908 },
  { name: '유수정소아청소년과의원', lat: 37.327374, lng: 127.095701 },
  { name: '으뜸가정의학과의원', lat: 37.340900, lng: 127.099362 },
  { name: '이레소아청소년과의원', lat: 37.327797, lng: 127.068628 },
  { name: '이승복내과의원', lat: 37.307367, lng: 127.085447 },
  { name: '이안소아청소년과의원', lat: 37.322286, lng: 127.095975 },
  { name: '장이비인후과의원', lat: 37.327018, lng: 127.112296 },
  { name: '제일가정의원', lat: 37.335120, lng: 127.105463 },
  { name: '주상연드림가정의학과의원', lat: 37.312928, lng: 127.081437 },
  { name: '진내과의원', lat: 37.314704, lng: 127.092757 },
  { name: '초이스이비인후과의원', lat: 37.323157, lng: 127.078037 },
  { name: '편한내과의원', lat: 37.340744, lng: 127.099103 },
  { name: '플러스건강가정의학과의원', lat: 37.327367, lng: 127.095693 },
  { name: '피터소아청소년과의원', lat: 37.339742, lng: 127.094143 },
  { name: '하늘빛소아청소년과의원', lat: 37.312925, lng: 127.081457 },
  { name: '한내과의원', lat: 37.319736, lng: 127.098028 },
  { name: '한솔이비인후과의원', lat: 37.331945, lng: 127.123999 },
  { name: '해맑은내과의원', lat: 37.319801, lng: 127.087119 },
  { name: '해맑은소아청소년과의원', lat: 37.323105, lng: 127.078059 },
  { name: '허원장성장의원', lat: 37.313367, lng: 127.078879 },
  { name: '호호소아청소년과의원', lat: 37.306702, lng: 127.084914 }
];


export default function Map() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const loadMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399), // 기본 위치
        zoom: 10,
      };

      const map = new naver.maps.Map('map', mapOptions);

      // 병원 정보를 순회하면서 마커 추가
      hospitals.forEach(hospital => {
        new naver.maps.Marker({
          position: new naver.maps.LatLng(hospital.lat, hospital.lng),
          map: map,
          title: hospital.name, // 마커에 마우스를 올렸을 때 표시될 텍스트
        });
      });

      setIsMapLoaded(true);
    };

    // naver.maps 객체가 로드되면 지도를 초기화
    if (window.naver && window.naver.maps) {
      loadMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => loadMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`;
      document.head.appendChild(mapScript);
    }
  }, []);

  return (
    <Main>
      <div id="map" style={{ width: '100%', height: '500px' }}>
        {!isMapLoaded && <p>Loading map...</p>}
      </div>
    </Main>
  );
}
