import { httpApi } from "~/infra/http/httpApi";

export const getPosts = async () => {
    try {
        const { data } = await httpApi.get('posts');
        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
};
