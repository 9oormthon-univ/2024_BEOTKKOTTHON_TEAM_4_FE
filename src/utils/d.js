import { Images } from '@globalStyles';
import Image from 'next/image';

export const essentialDiseaseList = [
  {
    id: 1,
    iconsImage: Images.ico_vac1,
    vacName: '결핵',
    vacDes: '결핵은 결핵균(Mycobacterium tuberculosis)에 의한 공기매개 감염질환으로 폐를 침범할 뿐만 아니라 흉막, 림프절, 복부, 골 및 관절, 중추신경계, 비뇨생식기, 기도, 심낭 등 신체의 여러 부분을 침범하는 질환입니다.',
    ...
  },
  {
    id: 2,
    iconsImage: Images.ico_vac2,
    vacName: 'B형간염',
    vacDes: 'B형간염 바이러스(Hepatitis B virus, HBV)에 감염되어 간에 염증이 발생하는 질환으로 경과에 따라 급성과 만성으로 구별할 수 있습니다. 급성 B형간염 중 5~10%가 만성 B형간염으로 진행되며 만성 B형간염이 지속되면 간경화증이나 간세포암으로 진행할 수 있습니다. 예방접종으로 국내 B형간염 바이러스 보유자가 많이 감소하였지만 미국 및 유럽의 여러 국가에 비해 아직도 많이 발생하고 있습니다.',
    ...
  },
  {
    id: 3,
    iconsImage: Images.ico_vac4,
    vacName: '디프테리아',
    vacDes: '디프테리아균(Corynebacterium diphtheriae) 감염 후 발생하는 급성, 독소(toxin) 매개성 호흡기 감염병입니다. 디프테리아는 온대기후 지역에서 상대적으로 발생율이 높으나 전 세계적으로 디프테리아 발생은 매우 드물며, 예방접종으로 국내에서는 1988년 이후부터는 환자가 발생하고 있지 않습니다.',
    ...
  },
  {
    id: 4,
    iconsImage: Images.ico_vac4,
    vacName: '폴리오',
    vacDes: '폴리오바이러스(Poliovirus) 감염으로 인해 소아에게 하지 마비를 일으키는 질병이며 흔히 소아마비로 알려져 있습니다. 예방접종으로 국내에서는 1983년 이후 환자가 발생하지 않고 있습니다.',
    ...
  },
  {
    id: 5,
    iconsImage: Images.ico_vac5,
    vacName: 'b형헤모필루스인플루엔자',
    vacDes: 'b형헤모필루스인플루엔자균(Haemophilus influenzae type b)은 뇌수막염, 후두개염, 폐렴, 관절염, 봉와직염 등 중증 침습성 감염 질환의 원인이 되며, 특히 5세 미만 소아에서 주로 발생합니다.',
    ...
  },
  {
    id: 6,
    iconsImage: Images.ico_vac6,
    vacName: '폐렴구균 감염증',
    vacDes: '폐렴구균(Streptococcus pneumoniae)은 급성 중이염, 폐렴 및 균혈증, 수막염 등 침습성 감염을 일으키는 주요 원인균 중의 하나이며, 폐렴구균에 의한 침습성 감염은 영아 및 어린 소아와 65세 이상의 고령자에서 발생 빈도가 높습니다.',
    ...
  },
  {
    id: 7,
    iconsImage: Images.ico_vac7,
    vacName: '홍역',
    vacDes: '홍역은 전 세계적으로 유행하는 급성 발진성 바이러스 질환으로 전염성이 매우 높은 급성 유행성 감염병입니다. 이전에는 소아에서 생명을 위협하는 주요한 질병이었지만 백신이 개발된 이후 그 발생이 현저히 감소하였습니다. 하지만 일부 개발도상국가에서는 아직도 흔히 발생하고 있습니다. 국내에서는 2001년 대유행 이후로는 환자가 급격히 감소하였고, 우리나라는 36개월 이상 토착형 홍역바이러스에 의한 환자발생이 없고, 높은 홍역 예방접종률과 적절한 감시체계 유지, 유전자형 분석결과 등 세계보건기구의 홍역퇴치인증기준을 달성하여 2014년 홍역퇴치인증을 받았습니다. 최근 국내에서 보고되는 환자들은 대부분 국외에서 감염된 사례로 확인되고 있습니다.',
    ...
  },
  {
    id: 8,
    iconsImage: Images.ico_vac8,
    vacName: '수두',
    vacDes: '수두는 수두-대상포진 바이러스(Varicella-Zoster virus, VZV)에 의한 일차 감염으로 전염력이 매우 강한 급성 감염질환입니다. 급성의 미열로 시작되고 전신적으로 가렵고 발진성 수포가 발생하는 질환입니다.',
    ...
  },
  {
    id: 9,
    iconsImage: Images.ico_vac9,
    vacName: '일본뇌염',
    vacDes: '일본뇌염은 Flavivirus 속 일본뇌염 바이러스(Japanese encephalitis virus)에 의한 인수공통감염병으로 작은빨간집모기(Culex tritaeniorhynchus)에 의해 감염되어 뇌염을 일으키는 질환입니다. 일단 일본뇌염에 걸리면 특별한 치료방법이 없으므로 백신 접종을 통한 예방이 최선입니다.',
    ...
  },
  {
    id: 10,
    iconsImage: Images.ico_vac10,
    vacName: '인플루엔자',
    vacDes: '인플루엔자는 인플루엔자 바이러스(Influenza virus)에 의한 감염병으로 매년 겨울철에 유행하여 고열과 함께 기침 등의 호흡기 증상을 일으키는 질환입니다.',
    ...
  },
  {
    id: 11,
    iconsImage: Images.ico_vac11,
    vacName: '장티푸스',
    vacDes: '장티푸스는 장티푸스균(Salmonella Typhi)의 파종감염에 의해 발생하는 급성 전신성 열성질환으로 상하수도 시설이 미비한 개발도상국에서 지속적으로 유행이 되는 질환입니다.',
    ...
    
  },
  {
    id: 12,
    iconsImage: Images.ico_vac12,
    vacName: '신증후군출혈열',
    vacDes: '신증후군출혈열(유행성출혈열)은 고열, 혈소판 감소증, 신부전 등을 특징으로 하는 급성 열성질환으로 Bunyaviridae과의 Hantavirus 속에 포함되는 여러 종의 바이러스에 의한 설치류 매개 인수공통감염병입니다.',
    ...
  },

    {
    id: 13,
    iconsImage: Images.ico_vac13,
    vacName: 'A형간염',
    vacDes: 'A형간염은 A형간염 바이러스(Hepatitis A virus, HAV)에 의하여 발생하는 간염으로 환경 및 위생개선과 적절한 예방조치로 예방이 가능합니다. ▶ A형간염은 어떻게 전파되나요? A형간염은 분변-경구 경로로 전파되며, 대부분 사람에서 사람으로 직접적으로 전파되거나 분변에 오염된 물이나 음식물을 섭취함으로써 간접적으로 전파되기도 합니다.',
    ...
  },  {
    id: 14,
    iconsImage: Images.ico_vac14,
    vacName: '그룹 A형 로타바이러스 감염증',
    vacDes: '로타바이러스는 영유아에게서 발생하는 위장관염의 흔한 원인으로 감염 시 구토, 설사, 발열, 복통 등의 증상이 나타나게 됩니다. ▶ 로타바이러스는 어떻게 전파되나요? 로타바이러스는 분변-경구 경로로 전파되며, 대부분 사람에서 사람으로 직접적으로 전파되나 분변에 오염된 물건이나 음식물, 호흡기를 통해서도 간접적으로 전파되기도 합니다.',
    ...
  },
  {
    id: 15,
    iconsImage: Images.ico_vac15,
    vacName: '사람유두종바이러스',
    vacDes: '사람유두종바이러스는 생식기 감염을 일으키는 가장 흔한 원인 병원체 중 하나로, 고위험군 HPV 감염과 관련 있는 암으로는 자궁경부암, 질암, 외음부암, 음경암, 항문암, 구강암, 구인두암 등이 있고 저위험군 HPV 감염과 관련 있는 질환으로는 생식기 사마귀, 재발성 호흡기 유두종 등이 있습니다.',
    ...
  },
  {
    id: 18,
    iconsImage: Images.ico_vac18,
    vacName: '파상풍',
    vacDes: '파상풍균(Clostridium tetani)이 생산하는 독소에 의해 유발되는 급성질환으로 파상풍에 이환되면 골격근의 경직과 근육수축이 발생하는 질병입니다.',
    ...
  },
  {
    id: 19,
    iconsImage: Images.ico_vac19,
    vacName: '백일해',
    vacDes: '백일해는 그람음성간균인(Bordetella pertussis)에 의한 호흡기 감염 질환입니다. 계절에 따른 발병률 차이는 명백히 밝혀진 바 없으나, 여름과 가을에 증가하는 경향을 보이며 전염성이 매우 높아 가족 내 2차 발병률이 80%에 달합니다.',
    ...
  },
  {
    id: 20,
    iconsImage: Images.ico_vac20,
    vacName: '유행성이하선염',
    vacDes: '유행성이하선염은 볼거리라고도 하며, 귀 아래의 침샘이 부어오르고 열과 두통이 동반되는 감염성 바이러스 질환입니다.',
    ...
  },
  {
    id: 21,
    iconsImage: Images.ico_vac21,
    vacName: '풍진',
    vacDes: '풍진은 발진, 림프절염을 동반하는 급성 바이러스성 질환입니다. 임신 초기의 임신부가 풍진에 감염될 경우 유산을 하거나 태아에게 선천성 기형을 유발할 수 있습니다.',
   ...
  }
];
