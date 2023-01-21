import { HttpResponse } from './types';

export interface Controller<T = Record<string, unknown>> {
  execute(data: T): HttpResponse | Promise<HttpResponse>;
}
