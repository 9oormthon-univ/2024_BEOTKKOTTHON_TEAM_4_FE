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
