import { poolPromise } from "../db/db";

export type userForm = {
  user_name: string;
  user_lastname: string;
  user_mail: string;
  user_password: string;
};

export const postSignUpFormInput = async (
  user: userForm
): Promise<userForm> => {
  const pool = await poolPromise;

  const { user_name, user_lastname, user_mail, user_password } = user;

  const query: string =
    "INSERT INTO public.users (user_name, user_lastname, user_mail, user_password) VALUES ($1, $2, $3, $4)";
  const values = [user_name, user_lastname, user_mail, user_password];

  return await pool.query(query, values);
};

export const getUserByMailPassword = async (
  user_mail: string,
  user_password: string
) => {
  const pool = await poolPromise;
  const query =
    "SELECT * FROM public.users WHERE user_mail = $1 AND user_password = $2";
  const values = [user_mail, user_password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const getUserByMail = async (user_mail: string) => {
  const pool = await poolPromise;
  const query = "SELECT * FROM public.users WHERE user_mail = $1";
  const values = [user_mail];
  const result = await pool.query(query, values);
  return result.rows[0];
};
export const getUserByResetToken = async (
  reset_token: string,
  isTokenExpired: string
) => {
  const pool = await poolPromise;
  const query = "SELECT * FROM public.users WHERE reset_token = $1";
  const values = [reset_token];
  const result = await pool.query(query, values);
  const data = result.rows[0];
  if (!data) {
    return "Token has expired or is invalid";
  }
  const userTokenDate = data.reset_token_expiry;

  if (isTokenExpired < userTokenDate) {
    return "Token has expired or is invalid";
  }

  return data;
};

export const postResetPasswordToken = async (
  encryptedToken: string,
  user_mail: string
) => {
  const reset_token_expiry = new Date(
    new Date().getTime() + 10 * 60 * 1000
  ).toISOString();
  const pool = await poolPromise;
  const query = `UPDATE public.users SET reset_token = $2, reset_token_expiry = $3 WHERE user_mail = $1`;
  const values = [user_mail, encryptedToken, reset_token_expiry];
  return await pool.query(query, values);
};
