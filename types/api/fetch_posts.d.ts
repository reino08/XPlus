export interface FetchPosts {
    fetchBusinessProfileTeam: Function,
    /**
     * @deprecated Always returns 0 instructions
     */
    fetchLikes: Function,
    fetchUserArticlesTweets: Function,
    fetchUserHighlightsTweets: Function,
    fetchUserMedia: Function,
    fetchUserPromotableTweets: Function,
    fetchUserSuperFollowsTweets: Function,
    fetchUserTweets: Function,
    fetchUserTweetsAndReplies: ({ count, cursor, userId }: { count?: number, cursor?: any, userId: string }) => any,
}
