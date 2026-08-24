
import { AsyncLocalStorage } from "node:async_hooks";
// import {v4 as uuid}

type asyncLocaltype = {
    corelationId:string
}

export const asyncLocalstorage = new AsyncLocalStorage<asyncLocaltype>();

export const getCorelationId = () => {
    const asyncStorage =asyncLocalstorage.getStore();
    return asyncStorage?.corelationId || "corelationId Not Found ";
}