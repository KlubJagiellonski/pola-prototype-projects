export type Validator<T> = (value: T) => string | undefined;

export const isNotEmpty = (value: string) => !!value && value.length && value.length > 0;

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 *
 * @param email
 * @returns undefined for valid email; otherwise error message (string)
 */
export const validateEmail: Validator<string | undefined> = (email: string | undefined): string | undefined => {
  if (!email || email.length === 0) {
    return 'brakuje adresu email';
  }

  const isValid = email ? emailRegex.test(email) : false;
  if (!isValid) {
    return 'nieprawidłowy adres email';
  }
  return;
};
