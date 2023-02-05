import { ImageNodeAttibutes } from "@retap/types";
import { NodeMeta } from "@retap/types";
import { VideoNodeAttibutes } from "@retap/types";
import { YoutubeNodeAttibutes } from "@retap/types";
import { NodeViewProps } from "@tiptap/react";
declare const useNode: (meta: NodeMeta<YoutubeNodeAttibutes> | NodeMeta<ImageNodeAttibutes> | NodeMeta<VideoNodeAttibutes>, nodeProps: NodeViewProps) => void;
export { useNode };
