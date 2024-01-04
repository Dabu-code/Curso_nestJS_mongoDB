
export interface PostEntity {
    uuid?: string;
    author: string;
    title: string;
    content: string;
    comments: CommentEntity[];
}

export interface CommentEntity {
    uuid?:string;
    author:string;
    content:string;
}