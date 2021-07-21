export interface UserLogin{
  email:string;
  password:string;
}
export interface AuthResult{
  message: string;
  data: IUser;
  token: string;
}

export interface IUser {
  createdAt: number;
  updatedAt: number;
  id: number;
  fullName: string;
  email: string;
  emailStatus: string;
  emailProofToken: string;
  emailProofTokenExpiresAt: number;
  type: string;
  credit: number;
}

