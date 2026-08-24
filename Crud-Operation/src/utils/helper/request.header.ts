import { AsyncLocalStorage } from "node:async_hooks";

type asyncLocType = {
    corelation:string
}

export const asyncLocalStorage = new AsyncLocalStorage<asyncLocType>();

export const getCorelationId = () => {
    const asycnStorage = asyncLocalStorage.getStore();
    return asycnStorage?.corelation || "Not-Found"
}