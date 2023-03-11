import { ImageNodeAttibutes } from "@chakra-editor/types";
import { NodeMeta } from "@chakra-editor/types";
import { VideoNodeAttibutes } from "@chakra-editor/types";
import { YoutubeNodeAttibutes } from "@chakra-editor/types";
import { NodeViewProps } from "@tiptap/react";
declare const useNode: (meta: NodeMeta<YoutubeNodeAttibutes> | NodeMeta<ImageNodeAttibutes> | NodeMeta<VideoNodeAttibutes>, nodeProps: NodeViewProps) => void;
export { useNode };
