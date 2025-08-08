export interface APIClient { }

export type APIFetcher<Key extends string, Type> = {
    [Prop in Key]: (client: APIClient) => Type;
};

export * from "./fetch_user_posts";
export * from "./post_actions";
export * from "./profile_actions";
export * from "./fetch_user";
export * from "./fetch_post";
