import {IUser} from "../interfaces";

export class User implements IUser{
  private _createdAt: number;
  private _credit: number;
  private _email: string;
  private _emailProofToken: string;
  private _emailProofTokenExpiresAt: number;
  private _emailStatus: string;
  private _fullName: string;
  private _id: number;
  private _type: string;
  private _updatedAt: number;


  constructor(createdAt: number, credit: number, email: string, emailProofToken: string, emailProofTokenExpiresAt: number, emailStatus: string, fullName: string, id: number, type: string, updatedAt: number) {
    this._createdAt = createdAt;
    this._credit = credit;
    this._email = email;
    this._emailProofToken = emailProofToken;
    this._emailProofTokenExpiresAt = emailProofTokenExpiresAt;
    this._emailStatus = emailStatus;
    this._fullName = fullName;
    this._id = id;
    this._type = type;
    this._updatedAt = updatedAt;
  }

  get createdAt(): number {
    return this._createdAt;
  }

  set createdAt(value: number) {
    this._createdAt = value;
  }

  get credit(): number {
    return this._credit;
  }

  set credit(value: number) {
    this._credit = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get emailProofToken(): string {
    return this._emailProofToken;
  }

  set emailProofToken(value: string) {
    this._emailProofToken = value;
  }

  get emailProofTokenExpiresAt(): number {
    return this._emailProofTokenExpiresAt;
  }

  set emailProofTokenExpiresAt(value: number) {
    this._emailProofTokenExpiresAt = value;
  }

  get emailStatus(): string {
    return this._emailStatus;
  }

  set emailStatus(value: string) {
    this._emailStatus = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get updatedAt(): number {
    return this._updatedAt;
  }

  set updatedAt(value: number) {
    this._updatedAt = value;
  }
}
