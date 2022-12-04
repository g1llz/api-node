import { HttpResponse } from './types';

export class CreateResponse {
  static ok(message?: string): HttpResponse {
    return { status: 200, message };
  }
}
