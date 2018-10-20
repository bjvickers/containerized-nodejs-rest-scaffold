"use strict"

import IApplicationRoutes from "./IApplicationRoutes"

export default interface IServer<T, K> {
  router(routes: IApplicationRoutes<K>): IServer<T, K>
  listen(port: number): T
}
