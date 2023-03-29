interface Config {
  url: string;
}
// type을 지정해 주기 위해 사용
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
