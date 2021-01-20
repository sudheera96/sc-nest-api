import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Sri Sudheera!';
  }
  message: 'Sri Sudheera, Software Developer ';

  getAbout(): string {
    return this.message;
  }
}
