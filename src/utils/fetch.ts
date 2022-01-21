import queryString from 'query-string';
import axios from 'axios';

interface PathBuilder {
    path: string;
    queryParams: {};
    pathParams: {};
}

interface FetchOptions {
    method: string;
    body: string | {};
    headers: {};
}

interface HeadersType {
    'Content-Type': string;
    Accept: string;
    App_Data?: string;
    Authorization?: string;
}

const addRequestHeaders = async () => {
    const headers: HeadersType = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    return headers;
};

const addQueryParams = (allParams: {}) => {
    return Object.keys(allParams).length === 0 ? '' : `?${queryString.stringify(allParams, {encode: false})}`;
};

const addPathParams = (path: string, paramMap: {}) => {
    return Object.keys(paramMap).reduce((str: string, param: string) => str.replace(`{${param}}`, paramMap[param]), path);
};

const pathBuilder = ({path = '', queryParams = {}, pathParams = {}}: Partial<PathBuilder>): string => {
    const queryString = addQueryParams(queryParams);
    return `${addPathParams(path, pathParams)}${queryString}`;
};

export const Async = {
    fetchPolyfill: async (path: string, {method, body, headers}, requestHeaders: any) => {
        try {
            return await axios(path, {
                method,
                headers: {...headers, ...requestHeaders},
                validateStatus: (status) => status < 400 || status === 424 || status === 404,
                ...(body && {data: body}),
            });
        } catch (err) {
            console.error('Async fetchPolyfill', err);

            if (err?.toString().includes('SyntaxError')) {
                new Error('Invalid JSON');
            }

            if (err?.toString().includes('Network Error')) {
                throw new Error('CORS Error');
            }

            throw err?.response;
        }
    },

    fetch: async <T extends {}>(originalPath: string, options: Partial<FetchOptions & PathBuilder> = {}): Promise<T> => {
        const {queryParams, pathParams, method = 'GET', body, headers: requestHeaders = {}} = options;

        const path = pathBuilder({path: originalPath, queryParams, pathParams});

        try {
            const headers = await addRequestHeaders();
            const {data} = await Async.fetchPolyfill(path, {method, body, headers}, requestHeaders);
            return data;
        } catch (err) {
            const {status, data} = err;

            if (status && data) {
                return data;
            } else {
                throw new Error(err.message);
            }
        }
    },
};
