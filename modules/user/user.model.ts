export interface UserModel {
  id: string;
  username: string;
  email: string;
  password: string;
}

// export type ShowUser = Omit<UserModel, "password">;

// export type ValidatePasswordSame = UserModel & { passwordConfirm: string };

// export type UserProfile = Pick<UserModel, "name" | "email">;
