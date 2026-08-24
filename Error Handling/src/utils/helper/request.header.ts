
import { AsyncLocalStorage } from "node:async_hooks";

type asyncLocalStorageType={
    corelationId:string
}

export const asyncLocalStorage = new AsyncLocalStorage<asyncLocalStorageType>();

export const getCorelationId = () => {
    const asyncStore = asyncLocalStorage.getStore();

    return asyncStore?.corelationId || "unknow-Error-While-Fetching-Corealtion-Id"
}