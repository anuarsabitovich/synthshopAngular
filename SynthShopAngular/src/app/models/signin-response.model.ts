export interface SignInResponse {
  token: string;
  refreshToken: string;
  success: boolean;
  errors: string[];
}
