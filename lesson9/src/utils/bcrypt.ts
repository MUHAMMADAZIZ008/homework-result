import * as bcrypt from 'bcrypt';

export async function createHashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function copmareHashPassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  const isMatch = bcrypt.compare(password, hashedPassword);
  return isMatch;
}
