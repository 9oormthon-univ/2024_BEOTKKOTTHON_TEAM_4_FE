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
import nav_home from '../../public/assets/ico/ico-nav-home.svg';
import nav_map from '../../public/assets/ico/ico-nav-map.svg';
import nav_my from '../../public/assets/ico/ico-nav-my.svg';
import nav_vachistory from '../../public/assets/ico/ico-nav-vachistory.svg';
import nav_vaclookup from '../../public/assets/ico/ico-nav-vaclookup.svg';

// prettier-ignore
export const Images: ImagesType = {
  // icon
  kakao: kakao,
  google: google,
  share: share,
  eye:eye,
  eyeSlash:eyeSlash,
  checkBox_selec_dis: checkBox_selec_dis,
  checkBox_selec_en :checkBox_selec_en,
  checkBox_unselec_dis :checkBox_unselec_dis,
  checkBox_unselec_en :checkBox_unselec_en,
  radio_selec_dis :radio_selec_dis,
  radio_selec_en :radio_selec_en,
  radio_unselec_dis : radio_unselec_dis,
  radio_unselec_en :radio_unselec_en,
  adjustment_selec :adjustment_selec,
  adjustment_unselec :adjustment_unselec,
  circle_x_fill :circle_x_fill,
  info_check :info_check,
  notification :notification,
  nav_home :nav_home,
  nav_map :nav_map,
  nav_my :nav_my,
  nav_vachistory :nav_vachistory,
  nav_vaclookup :nav_vaclookup,

  //image
  vacgom01: Vacgom01,
  vacgom : vacgom,
};
