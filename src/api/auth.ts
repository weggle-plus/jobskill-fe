import createInstance from '@/api/http';

interface SignUpRequestBody {
    name: string;
    email: string;
    password: string;
    nickname: string;
    phoneNumber: string;
    isMarketingAgree: boolean;
}

export const signUp = async (requestBody: SignUpRequestBody) => {
  const http = createInstance;

  return await http.post('/auth/sign-up', requestBody);
};