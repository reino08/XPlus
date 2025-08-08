export interface FetchPost {
    fetchTweetDetail: (_: Partial<{
        controller_data: any,
        cursor: string,
        focalTweetId: string,
        isReaderMode: any,
        rankingMode: string,
        referrer: any,
        rux_context: any,
        with_rux_injections: any,
        withReplies: boolean
    }>) => Promise<any>,
}
