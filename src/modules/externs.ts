import Webpack from "./webpack.ts"

export const extern_React = Webpack.getProps(x => x, "createElement")
export const extern_ReactDOM = Webpack.getProps(x => x, "createRoot")
export const extern_Link = Webpack.getString("link", x => x?.e)

export const extern_UserData = Webpack.getString("Bearer", x => x?.__xp_module);

export const extern_Tweet = Webpack.getString("tweet:e.tweet", x => x?.ZP?.render);
export const extern_TweetUser = Webpack.getString("_getUserScreenNameNode", x => x?.Z);
export const extern_UserCard = Webpack.getString("_useUserHoverCardWrapper", x => x?.Z?.prototype?.render);
export const extern_QuotedPost = Webpack.getString("isQuotedTweetUnavailable", x => x?.Z);
export const extern_FollowButton = Webpack.getString("isSuperFollowing", x => x?.Z?.prototype?.render);
export const extern_ActionBar = Webpack.getProps(x => x?.Z, "ActionLike");
export const extern_ActionBarParent = Webpack.getString("_viewCountsPublicVisibilityEnabled", x => x?.__xp_module);
export const extern_JoinDate = Webpack.getString("joinDate", x => x?.Z?.type);
export const extern_DraftJSEditor = Webpack.getString("_handleEditorContainerRef", x => x?.prototype?.render);
export const extern_Timestamp = Webpack.getString("amountOfTime", x => x?.Z);
export const extern_VideoPlayer = Webpack.getString("_handleCopyVideoAddress", x => x?.Z?.prototype?.render);
export const extern_Poll = Webpack.get(exports => exports?.HWCard);
export const extern_ContextMenu = Webpack.getProps(x => x?.default?.WrappedComponent?.type?.WrappedComponent?.type?.render?.()?.props?.wrappedComponent?.WrappedComponent?.prototype, "_shouldIncludeTweetAppealOption");
export const extern_Sidebar = Webpack.getString("wideMode", x => x?.ZP);
export const extern_SidebarButton = Webpack.getString("showHasNewItemsIndicator", x => x?.ZP);