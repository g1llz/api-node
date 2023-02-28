import { HttpResponse } from './types';

export class CreateResponse {
  static ok(data?: Record<string, unknown>): HttpResponse {
    return { status: 200, data };
  }

  static created(data?: Record<string, unknown>): HttpResponse {
    return { status: 201, data };
  }

  static notFound(text?: string): HttpResponse {
    return { status: 404, data: { message: text ?? null } };
  }

  static badRequest(text?: string): HttpResponse {
    return { status: 400, data: { message: text ?? null } };
  }
}
