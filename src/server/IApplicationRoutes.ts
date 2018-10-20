"use strict"

export default interface IApplicationRoutes<T> {
  add(route: string, router: T): void
  all(): Map<string, T>
}
