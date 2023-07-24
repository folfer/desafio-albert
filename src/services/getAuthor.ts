import { httpApi } from "~/infra/http/httpApi";

export const getAuthor = async (id: number) => {
    try {
        const { data } = await httpApi.get(`users/${id}`);
        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
};
