import { Injectable } from '@angular/core';

@Injectable()
export class ClassicInjectableService {
  getMessage() {
    return 'Message from classic injectable service';
  }
}
