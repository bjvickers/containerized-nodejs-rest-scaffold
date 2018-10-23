"use strict"

import express from "express"

export default interface IRouterFactory {
  createRouter(): express.Router
}
