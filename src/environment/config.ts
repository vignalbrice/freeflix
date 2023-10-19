export type Config = {
  production: boolean;
  api: {
    baseUrl: string;
    imageUrl: string;
    secret: string;
    version: number;
  };
}