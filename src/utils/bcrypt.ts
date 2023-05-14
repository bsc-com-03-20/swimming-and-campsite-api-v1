import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  static genSaltSync(arg0: number) {
    throw new Error("Method not implemented.");
  }
  static compareSync(password: string, password1: string): boolean {
    throw new Error("Method not implemented.");
  }
  static hashSync(password: string, salt: any) {
    throw new Error("Method not implemented.");
  }
  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword;
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  }
}