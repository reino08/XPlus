export default function extract(tweet) {
    // info of the viewer, not needed.
    for (const prop of [
        "bookmarked",
        "favorited",
        "retweeted",
    ]) delete tweet.legacy[prop];

    tweet.legacy.views = tweet.views;
    return tweet.legacy;
}
