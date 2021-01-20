import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Sri Sudheera!';
  }

  getAbout(): string {
    return 'Sri Sudheera, Software Developer ';
  }
}
