import type * as ReactTypes from "react";
import type * as ReactDOMTypes from "react-dom/client";
import type * as ReactRouter from "react-router";
import type { APIFetcher, FetchPosts } from "../../types/api/index";
import Webpack from "./webpack"

// React library
export const extern_React: Promise<typeof ReactTypes> = Webpack.getProps(x => x, "createElement");
export const extern_ReactDOM: Promise<typeof ReactDOMTypes> = Webpack.getProps(x => x, "createRoot");
export const extern_ReactRouter: Promise<typeof ReactRouter> = Webpack.getProps(x => x, "MemoryRouter");
export const extern_Link = Webpack.getString("link", x => x?.e);

// Draft.js library
export const extern_DraftJSEditor = Webpack.getString("_handleEditorContainerRef", x => x?.prototype?.render);
export const extern_DraftJSEditorState = Webpack.getProps(x => x, "undo", "redo");
export const extern_DraftJSContentState = Webpack.getProps(x => x, "createFromText");

// Internal site data
export const extern_UserData = Webpack.getString("Bearer", x => x?.__xp_module);
export const extern_HeartBeat = Webpack.getProps(x => x, "S1");

// API calls
export const extern_APIFetchUser = Webpack.getString("fetchOneUserByScreenName", x => x?.ZP);
export const extern_APIFollowing = Webpack.getString("fetchFollowing", x => x?.ZP);
export const extern_APIBadgeCount = Webpack.getString("fetchBadgeCount", x => x?.Z);
export const extern_APIFetchPosts: Promise<APIFetcher<'Z', FetchPosts>> = Webpack.getString("fetchUserTweets", x => x?.Z);

// React components
export const extern_Tweet = Webpack.getString("right_tweet_header_ad_label", x => x?.__xp_module);
export const extern_TweetUser = Webpack.getString("_getUserScreenNameNode", x => x?.Z);
export const extern_UserCard = Webpack.getString("_useUserHoverCardWrapper", x => x?.Z?.prototype?.render);
export const extern_QuotedPost = Webpack.getString("isQuotedTweetUnavailable", x => x?.Z);
export const extern_FollowButton = Webpack.getString("isSuperFollowing", x => x?.Z?.prototype?.render);
export const extern_ActionBar = Webpack.getProps(x => x?.Z, "ActionLike");
export const extern_ActionBarParent = Webpack.getString("_viewCountsPublicVisibilityEnabled", x => x?.__xp_module);
export const extern_JoinDate = Webpack.getString("joinDate", x => x?.Z?.type);
export const extern_Timestamp = Webpack.getString("amountOfTime", x => x?.Z);
export const extern_VideoPlayer = Webpack.getString("_handleCopyVideoAddress", x => x?.Z?.prototype?.render);
export const extern_Poll = Webpack.get(exports => exports?.HWCard);
export const extern_ContextMenu = Webpack.getProps(x => x?.default?.WrappedComponent?.type?.WrappedComponent?.type?.render?.()?.props?.wrappedComponent?.WrappedComponent?.prototype, "_shouldIncludeTweetAppealOption");
export const extern_Sidebar = Webpack.getString("wideMode", x => x?.ZP);
export const extern_SidebarButton = Webpack.getString("showHasNewItemsIndicator", x => x?.ZP);
export const extern_WindowHeader = Webpack.getString("backButtonType", x => x?.ZP);
export const extern_DMPage = Webpack.getString("_renderForOneColumnLayout", x => x?.__xp_module);
export const extern_DMMessages = Webpack.getString("DIRECT_MESSAGES_CONVERSATION", x => x?.__xp_module);
export const extern_RightSidebar = Webpack.getString("rweb_sidebar_lower_whats_happening_enabled", x => x?.__xp_module);
