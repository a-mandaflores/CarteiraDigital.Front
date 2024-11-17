export type ErrorKey = 'required' | 'minLength' | 'passwordRequired' | 'emailInvalid';

export const errorMessages: Record<ErrorKey, string> = {
  required: 'Preencha todos os campos',
  minLength: 'O texto precisa conter pelo menos 3 caracteres',
  passwordRequired: 'A senha é obrigatória',
  emailInvalid: 'O email não é válido',
};
