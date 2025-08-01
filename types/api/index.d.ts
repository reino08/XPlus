export interface APIClient {

}

export type APIFetcher<Key extends string, Type> = {
    [Prop in Key]: (client: APIClient) => Type;
};

export * from "./fetch_posts";
export * from "./post_actions";
