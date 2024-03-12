/**
 * - 이미지 path 정보를 assign 할 때 필요한 정보
 * @type {string}
 */
const BASE_URL = process.env.BASE_URL;
interface ImagesType extends Record<string, string> {}
import kakao from '../../public/assets/image/ico-kakao.svg';
import google from '../../public/assets/image/ic-google.svg';
// prettier-ignore
export const Images: ImagesType = {
  // icon
  Next: `${BASE_URL}/public/assets/images/next.svg`,
  kakao: kakao,
  google: google,
};
