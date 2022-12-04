export type HttpResponse = {
  status: number;
  message?: string;
};

export interface Controller<T = Record<string, unknown>> {
  execute(data: T): HttpResponse | Promise<HttpResponse>;
}
