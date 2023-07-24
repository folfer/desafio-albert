import { httpApi } from "~/infra/http/httpApi";

export const getComments = async (id: number) => {
    try {
        const { data } = await httpApi.get(`comments?postId=${id}`);
        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
};
