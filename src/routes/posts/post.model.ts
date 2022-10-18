export interface Post {
    id?: string | number;
    title: string;
    content: string;
    published?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
