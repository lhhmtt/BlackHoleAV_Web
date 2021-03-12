import axios, { AxiosPromise } from "axios";
import { TIMEOUT, API_SERVER } from "../constants";

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: API_SERVER,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
});

const getIndex = (): AxiosPromise<string> => instance.get("/");


export default {
  getIndex
};
