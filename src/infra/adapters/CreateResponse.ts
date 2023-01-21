import { HttpResponse } from './types';

export class CreateResponse {
  static ok(data?: Record<string, unknown>): HttpResponse {
    return { status: 200, data };
  }
}
