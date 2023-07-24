export interface RootStackParamList
    extends AppRoutesParamList { }


export type AppRoutesParamList = {
    Post: { id: number; title: string; description: string };
};

export interface IPostsProps {
    id: number,
    userId: number,
    title: string,
    body: string,
}

export interface ICommentsProps {
    id: number,
    postId: number,
    name: string,
    email: string,
    body: string,
}