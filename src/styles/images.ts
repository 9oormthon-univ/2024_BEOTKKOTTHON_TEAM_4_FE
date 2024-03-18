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
import choice_selec from '../../public/assets/ico/ico-choice-selec.svg';
import choice_unselec from '../../public/assets/ico/ico-choice-unselec.svg';
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
  choice_selec: choice_selec,
  choice_unselec: choice_unselec,

  //image
  vacgom01: Vacgom01,
  vacgom: vacgom,
};
