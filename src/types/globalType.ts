export interface ParamsType extends Record<string | number, any> {}
export interface OnChangeValueType {
  (field: string, value: any, option?: ParamsType, type?: string): void;
}
export interface OnChangePasswordType {
  (value: any): void;
}
export interface RequestOptions {
  method: string;
  headers: {
    Authorization: string;
    'Content-Type': string;
  };
  body: string;
  cache: string;
}

export interface VaccineData {
  vaccineId: string;
  diseaseId: string;
  diseaseName: string;
  vaccineName: string;
  inoculatedDate: string;
  isCompleted: boolean;
  iconImage: string;
  type: 'NATION' | 'EXTRA' | 'EVENT';
}
