import { makeLink } from "../../utils.ts";
import { patchHalves } from "../../patch.ts";
import { extern_ActionBar, extern_ActionBarParent } from "../externs.ts";

extern_ActionBarParent.then(exports => {
    let obj = exports.Z.WrappedComponent.type.WrappedComponent.type;
    let original = obj.render;
    obj.render = function () {
        let res = original.apply(this, arguments);

        patchHalves(
            res.props.wrappedComponent.WrappedComponent.prototype,
            "render",
            undefined,
            (self, _, res) => {
                let props = res.props.children[1].props;
                props.retweetCount = self.props.tweet.retweet_count;
                props.quoteCount = self.props.tweet.quote_count;
            }
        )

        obj.render = original;
        return res;
    }
});

extern_ActionBar.then(exports => {
    patchHalves(exports, "Z", undefined, (_, [props], res) => {
        if (props.quoteCount + props.retweetCount == 0)
            return;

        let children: any[] = res.props.children.props.children;
        children.splice(2, 0,
            makeLink({ className: "xp-quote-count" }, props.quoteCount, `/${props.tweetLink}/quotes`)
        );
    });
});
