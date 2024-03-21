/**
 * - 이미지 path 정보를 assign 할 때 필요한 정보
 * @type {string}
 */
const BASE_URL = process.env.BASE_URL;
interface ImagesType extends Record<string, string> {}
import kakao from '../../public/assets/ico/ico-kakao.svg';
import google from '../../public/assets/ico/ic-google.svg';
import vacgom from '../../public/assets/image/img-splash-vacgom.svg';
import Vacgom01 from '../../public/assets/image/img-Vacgom01.svg';
import share from '../../public/assets/ico/ico-share.svg';
import eye from '../../public/assets/ico/ico-eye.svg';
import eyeSlash from '../../public/assets/ico/ico-eye-slash.svg';
import checkBox_selec_dis from '../../public/assets/ico/ico-checkbox-selected-disabled.svg';
import checkBox_selec_en from '../../public/assets/ico/ico-checkbox-selected-enabled.svg';
import checkBox_unselec_dis from '../../public/assets/ico/ico-checkbox-unselected-disabled.svg';
import checkBox_unselec_en from '../../public/assets/ico/ico-checkbox-unselected-enabled.svg';
import radio_selec_dis from '../../public/assets/ico/ico-radio-selected-disabled.svg';
import radio_selec_en from '../../public/assets/ico/ico-radio-selected-enabled.svg';
import radio_unselec_dis from '../../public/assets/ico/ico-radio-unselected-disabled.svg';
import radio_unselec_en from '../../public/assets/ico/ico-radio-unselected-enabled.svg';
import adjustment_selec from '../../public/assets/ico/ico-adjustment-selected.svg';
import adjustment_unselec from '../../public/assets/ico/ico-adjustment-unselected.svg';
import circle_x_fill from '../../public/assets/ico/ico-circle-x-filled.svg';
import info_check from '../../public/assets/ico/ico-information-checked.svg';
import notification from '../../public/assets/ico/ico-notification.svg';
import nav_home_selec from '../../public/assets/ico/ico-nav-home-selec.svg';
import nav_home_unselec from '../../public/assets/ico/ico-nav-home-unselec.svg';
import nav_map_selec from '../../public/assets/ico/ico-nav-map-selec.svg';
import nav_map_unselec from '../../public/assets/ico/ico-nav-map-unselec.svg';
import nav_my_selec from '../../public/assets/ico/ico-nav-my-selec.svg';
import nav_my_unselec from '../../public/assets/ico/ico-nav-my-unselec.svg';
import nav_vachistory_selec from '../../public/assets/ico/ico-nav-vachistory-selec.svg';
import nav_vachistory_unselec from '../../public/assets/ico/ico-nav-vachistory-unselec.svg';
import nav_vaclookup_selec from '../../public/assets/ico/ico-nav-vaclookup-selec.svg';
import nav_vaclookup_unselec from '../../public/assets/ico/ico-nav-vaclookup-unselec.svg';
import warning from '../../public/assets/ico/ico-warning.svg';

import arrow_down from '../../public/assets/ico/ico-arrow-down.png';
import arrow_right from '../../public/assets/ico/ico-arrow-right.svg';
import arrow_left from '../../public/assets/ico/ico-arrow-left.svg';
import choice_selec from '../../public/assets/ico/ico-choice-selec.svg';
import choice_unselec from '../../public/assets/ico/ico-choice-unselec.svg';
import radio_selec from '../../public/assets/ico/ico-Radiobox_select.svg';
import radio_unselec from '../../public/assets/ico/ico-Radiobox_unselec.svg';
import dropdown_up from '../../public/assets/ico/ico-dropdown-up.svg';
import dropdown_down from '../../public/assets/ico/ico-dropdown-down.svg';

import VaccineCardBack from '../../public/assets/image/img-VaccineCard-back.svg';
import VaccineCardBackLarge from '../../public/assets/image/img-VaccineCardBack_Large.svg';
import vaccine_status_true from '../../public/assets/image/img-vaccineStatus-true.svg';
import vaccine_status_false from '../../public/assets/image/img-vaccineStatus-false.svg';
import vaccine_status_disable from '../../public/assets/image/img-vaccine_status_disable.svg';

import ico_vac1 from '../../public/assets/ico/ico-vac1.svg';
import ico_vac2 from '../../public/assets/ico/ico-vac2.svg';
import ico_vac3 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac4 from '../../public/assets/ico/ico-vac4.svg';
import ico_vac5 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac6 from '../../public/assets/ico/ico-vac6.svg';
import ico_vac7 from '../../public/assets/ico/ico-vac7.svg';
import ico_vac8 from '../../public/assets/ico/ico-vac8.svg';
import ico_vac9 from '../../public/assets/ico/ico-vac9.svg';
import ico_vac10 from '../../public/assets/ico/ico-vac10.svg';
import ico_vac11 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac12 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac13 from '../../public/assets/ico/ico-vac13.svg';
import ico_vac14 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac15 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac16 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac17 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac18 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac19 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac20 from '../../public/assets/ico/ico-vac-none.svg';
import ico_vac21 from '../../public/assets/ico/ico-vac-none.svg';

// 감염병 세부 페이지에 들어가는 요소들
import ico_check_filled from '../../public/assets/ico/ico-check-filled.svg';
import ico_pin_selec from '../../public/assets/ico/ico-pin-selec.svg';
import ico_pin_unselec from '../../public/assets/ico/ico-pin-unselec.svg';

//병원 지도에 들어가는 요소
import ico_map_my from '../../public/assets/ico/ico-map-my.svg';
import ico_map_selec from '../../public/assets/ico/ico-map-selec.svg';
import ico_map_unselec from '../../public/assets/ico/ico-map-unselec.svg';
import ico_map_tooltip from '../../public/assets/ico/ico-map-tooltip.svg';
import ico_map_influ_tooltip from '../../public/assets/ico/ico-map-influ-tooltip.svg';
import ico_map_tooltip_button from '../../public/assets/ico/ico-map-tooltip-button.svg';
import ico_map_reload from '../../public/assets/ico/ico-map-reload.svg';
import ico_support_intro from '../../public/assets/ico/ico-support-influ.svg';
import ico_support_hintro from '../../public/assets/ico/ico-support-hpv.svg';

// prettier-ignore
export const Images: ImagesType = {
  // icon
  kakao: kakao,
  google: google,
  share: share,
  eye: eye,
  eyeSlash: eyeSlash,
  checkBox_selec_dis: checkBox_selec_dis,
  checkBox_selec_en: checkBox_selec_en,
  checkBox_unselec_dis: checkBox_unselec_dis,
  checkBox_unselec_en: checkBox_unselec_en,
  radio_selec_dis: radio_selec_dis,
  radio_selec_en: radio_selec_en,
  radio_unselec_dis: radio_unselec_dis,
  radio_unselec_en: radio_unselec_en,
  adjustment_selec: adjustment_selec,
  adjustment_unselec: adjustment_unselec,
  circle_x_fill: circle_x_fill,
  info_check: info_check,
  notification: notification,
  nav_home_selec: nav_home_selec,
  nav_home_unselec: nav_home_unselec,
  nav_map_selec: nav_map_selec,
  nav_map_unselec: nav_map_unselec,
  nav_my_selec: nav_my_selec,
  nav_my_unselec: nav_my_unselec,
  nav_vachistory_selec: nav_vachistory_selec,
  nav_vachistory_unselec: nav_vachistory_unselec,
  nav_vaclookup_selec: nav_vaclookup_selec,
  nav_vaclookup_unselec: nav_vaclookup_unselec,
  warning: warning,
  
  arrow_down: arrow_down,
  arrow_right: arrow_right,
  arrow_left: arrow_left,
  
  choice_selec: choice_selec,
  choice_unselec: choice_unselec,
  radio_selec: radio_selec,
  radio_unselec: radio_unselec,
  ico_vac1: ico_vac1,
  ico_vac2: ico_vac2,
  ico_vac3: ico_vac3,
  ico_vac4: ico_vac4,
  ico_vac5: ico_vac5,
  ico_vac6: ico_vac6,
  ico_vac7: ico_vac7,
  ico_vac8: ico_vac8,
  ico_vac9: ico_vac9,
  ico_vac10: ico_vac10,
  ico_vac11: ico_vac11,
  ico_vac12: ico_vac12,
  ico_vac13: ico_vac13,
  ico_vac14: ico_vac14,
  ico_vac15: ico_vac15,
  ico_vac16: ico_vac16,
  ico_vac17: ico_vac17,
  ico_vac18: ico_vac18,
  ico_vac19: ico_vac19,
  ico_vac20: ico_vac20,
  ico_vac21: ico_vac21,
  ico_check_filled: ico_check_filled,
  ico_pin_selec: ico_pin_selec,
  ico_pin_unselec: ico_pin_unselec,
  arrow_left: arrow_left,
  dropdown_up: dropdown_up,
  dropdown_down: dropdown_down,

  ico_map_my:ico_map_my,
  ico_map_selec:  ico_map_selec,
  ico_map_unselec: ico_map_unselec,
  ico_map_tooltip: ico_map_tooltip,
  ico_map_influ_tooltip: ico_map_influ_tooltip,
  ico_map_tooltip_button: ico_map_tooltip_button,
  ico_map_reload: ico_map_reload,
  ico_support_intro: ico_support_intro,
  ico_support_hintro: ico_support_hintro,


  //image
  vacgom01: Vacgom01,
  vacgom: vacgom,
  VaccineCardBack: VaccineCardBack,
  VaccineCardBackLarge: VaccineCardBackLarge,
  vaccine_status_false: vaccine_status_false,
  vaccine_status_true: vaccine_status_true,
  vaccine_status_disable: vaccine_status_disable,
};
