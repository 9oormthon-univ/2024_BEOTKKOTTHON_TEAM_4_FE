export interface ParamsType extends Record<string | number, any> {}
export interface OnChangeValueType {
  (field: string, value: any, option?: ParamsType, type?: string): void;
}
