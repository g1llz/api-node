import { HttpResponse } from './types';

export class CreateResponse {
  static ok(data?: Record<string, unknown>): HttpResponse {
    return { status: 200, data };
  }

  static created(data?: Record<string, unknown>): HttpResponse {
    return { status: 201, data };
  }

  static notFound(): HttpResponse {
    return { status: 404 };
  }
}
