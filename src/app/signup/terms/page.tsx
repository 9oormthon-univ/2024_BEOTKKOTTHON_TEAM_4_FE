'use client';
import * as React from 'react';

import { JoinWrap } from './style';

import BackHeader from '@/app/_component/molecule/BackHeader';
import JoinTemplate from '@/app/_component/temp/JoinTemplate';
import BottomButton from '@/app/_component/atom/BottomButton';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useQueryParams } from '@/hooks/useParam';
import TermsDetail from '@/app/_component/molecule/TermsDetail';
import { Suspense, useState } from 'react';
import { OnChangeValueType, ParamsType } from '@/types/globalType';

export default function Terms(): React.JSX.Element {
  const router = useRouter();
  const [params, setParams] = useState<ParamsType>({
    nickname: '',
  });
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleClick = () => {
    router.push('/signup/more');
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JoinWrap>
        <BackHeader title={' '} url={'/signup'} />
        <JoinTemplate
          title={'예방접종도우미의'}
          useterm={true}
          subTop={'회원약관에 동의해야 정상적으로 서비스를 이용할 수 있어요.'}
          trueLabel={'네, 모두 동의합니다.'}
          params={params}
          field={'terms'}
          onChangeValue={onChangeValue}
        />
        <div className="detail">
          <TermsDetail
            title={'예방접종 도우미 이용약관'}
            content={'<백곰>은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다. 제1조 개인정보의 처리 목적 <백곰>은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. 1. 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의여부 확인, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다. 2. 재화 또는 서비스 제공 물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제·정산, 채권추심의 목적으로 개인정보를 처리합니다. 제2조 개인정보의 처리 및 보유 기간 ① <백곰>은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. 1. 웹사이트 회원 가입 및 관리 : 웹사이트 탈퇴 시까지 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 1. 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지 2. 웹사이트 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지 2. 재화 또는 서비스 제공 : 재화·서비스 공급완료 및 요금결제·정산 완료시까지 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지 1. 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록 - 표시·광고에 관한 기록 : 6개월 - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년 - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년 2. 「통신비밀보호법」에 따른 통신사실확인자료 보관 - 가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년 - 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월 제3조 처리하는 개인정보의 항목 <백곰>은 다음의 개인정보 항목을 처리하고 있습니다. 1. 회원 가입 및 관리 • 필수항목 : 성명, 생년월일, 주민등록번호, 전화번호, 기저질환, 임신 여부, 의료기관 종사 여부, 장기이식 경험 여부 2. 재화 또는 서비스 제공 • 필수항목 : 성명, 생년월일, 주민등록번호, 전화번호, 기저질환, 임신 여부, 의료기관 종사 여부, 장기이식 경험 여부' }
            status={params.terms}
          />
          <TermsDetail
            title={'예방접종 도우미 개인정보 수집 및 이용'}
            content={'제1조 목적 본 약관은 백곰이 운영하는 웹사이트 ‘백곰’ (https://vacgom.co.kr) (이하 “웹사이트”라 합니다)에서 제공하는 온라인 서비스(이하 “서비스”라 한다)를 이용함에 있어 이용 절차를 포함한 서비스 제공자와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.  제2조 용어의 정의  본 약관에서 사용하는 용어는 다음과 같이 정의한다. 1. “웹사이트”란 서비스 제공가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래 할 수 있도록 설정한 가상의 영업장을 말합니다 2. “회원”이라 함은 “웹사이트”에 개인정보를 제공하여 회원등록을 한 자로서, “웹사이트”의 정보를 지속적으로 제공받으며, “웹사이트”이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. 3. “닉네임”이라 함은 이용자가 회원가입당시 등록한 사용자 “개인이용문자”를 말합니다.제3조 약관의 공시 및 효력과 변경 1. 본 약관은 회원가입 화면에 게시하여 공시하며 서비스 제공자는 사정변경 및 영업상 중요한 사유가 있을 경우 약관을 변경할 수 있으며 변경된 약관은 공지사항을 통해 공시한다 2. 본 약관 및 차후 서비스 제공자의 사정에 따라 변경된 약관은 이용자에게 공시함으로써 효력을 발생한다.백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요 백곰을 이용하기 위해서는 질병관리청의 예빵접종도우미 가입이 필요해요'}
            status={params.terms}
          />
        </div>
        <BottomButton
          filled={params.terms === true}
          handleNextButtonClick={handleClick}
        />
      </JoinWrap>
    </Suspense>
  );
}
