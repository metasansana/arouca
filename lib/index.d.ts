
export declare interface StringMap {

  [key: string]: any;

}

export declare interface Handler {

  (request: Request, next: Function): void;

}

export declare class Request {

  public path: string;
  public query: StringMap;
  public params: StringMap;

  constructor(path: string, query: StringMap, params: StringMap);

}

export declare class Router {

  constructor(window?: Window);

  handleEvent(e: Event): void;

  get(path: string, cb: Handler): Router;

  use(handler: Handler): Router;


}
