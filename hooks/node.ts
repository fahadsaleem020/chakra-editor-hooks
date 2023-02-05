import { ImageNodeAttibutes } from "@retap/types";
import { NodeMeta } from "@retap/types";
import { VideoNodeAttibutes } from "@retap/types";
import { YoutubeNodeAttibutes } from "@retap/types";
import { NodeViewProps } from "@tiptap/react";
import { useEffect } from "react";

const useNode = (
  meta:
    | NodeMeta<YoutubeNodeAttibutes>
    | NodeMeta<ImageNodeAttibutes>
    | NodeMeta<VideoNodeAttibutes>,
  nodeProps: NodeViewProps
) => {
  const { updateAttributes, selected } = nodeProps;

  useEffect(() => {
    if (selected && nodeProps.node.attrs) {
      meta?.swallowNodeAttributes!(nodeProps.node.attrs as any);
    }
    return () => meta?.swallowNodeAttributes!(undefined);
  }, [nodeProps, meta, selected]);

  useEffect(() => {
    if (selected) {
      setTimeout(() => updateAttributes(meta?.attributes!), 0);
    }
    return () => meta?.setNodeAttributes!(undefined);
  }, [meta, selected, updateAttributes]);
};

export { useNode };
