import Webpack from "./webpack.ts"

export let extern_React = Webpack.getProps(x => x, "createElement")
export let extern_ReactDOM = Webpack.getProps(x => x, "createRoot")
export let extern_Link = Webpack.getString("link", x => x?.e)

export let extern_Tweet = Webpack.getString("freedom_of_speech_not_reach", x => x?.ZP);
export let extern_TweetUser = Webpack.getString("_getUserScreenNameNode", x => x?.Z);
export let extern_UserCard = Webpack.getString("_useUserHoverCardWrapper", x => x?.Z?.prototype?.render);