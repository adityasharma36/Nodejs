
import { AsyncLocalStorage } from "node:async_hooks";

type corelationIdType = {
    corelation:string
}

export const asynclocalStorage = new AsyncLocalStorage<corelationIdType>();

export const getCorelationId = () => {

    const asyncstorage = asynclocalStorage.getStore();
    return asyncstorage?.corelation || "Not-Found"
    
}