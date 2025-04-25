import Logger from "../../logger.ts";
import { patchHalves } from "../../patch.ts";
import { extern_VideoPlayer } from "../externs.ts";
import { React } from "../react.ts";

extern_VideoPlayer.then(exports => {
    patchHalves(exports.Z.prototype, "render", undefined, (self, _, res) => {
        if (!self.state.openContextMenu) return;
        patchHalves(res.props, "children", undefined, (_, __, res) => {
            let props = res.props.children[1].props;
            let elements = [
                React.createElement(props.children.type, {
                    actionText: "Copy download link",
                    onClick: () => call(navigator.clipboard.writeText.bind(navigator.clipboard), getVideoUrl(self)),
                    withBottomBorder: false,
                }),
                React.createElement(props.children.type, {
                    actionText: "Open video source",
                    onClick: () => call(window.open, getVideoUrl(self)),
                    withBottomBorder: false,
                }),
            ];
            props.children = React.Children.toArray(props.children).concat(elements);
        });
    })
});

function call(func, val) {
    if (val) func(val);
}

function getVideoUrl(self): string | void {
    let videos = self.props.playerState.tracks
        .flatMap(track => track.variants)
        .filter(variant => variant.type == "video/mp4");

    let best: any = undefined;
    for (let video of videos) {
        if ((best?.bitrate || -Infinity) < video.bitrate)
            best = video;
    }

    if (!best)
        return void Logger.warn("Failed to get download url for video:", self.props.playerState);
    return best.src;
}
