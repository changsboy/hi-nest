import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello 안녕 안녕!';
  }

  getHi(): string {
    return 'Hi Hello';
  }
}
