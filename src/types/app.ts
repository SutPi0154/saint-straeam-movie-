export interface AppSlice {
  init: boolean;
  isLoading: boolean;
  isError: Error | null;
}
export interface BaseOptions {
  onSuccess?: (data?: any) => void;
  onError?: (data?: any) => void;
}
