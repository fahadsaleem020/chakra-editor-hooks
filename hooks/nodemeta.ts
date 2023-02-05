import { RetapToolbarProps } from "@retap/types";
import { useDisclosure } from "@chakra-ui/react";
import { UseNodeMeta } from "@retap/types";
import { useState } from "react";

const useNodeMeta: UseNodeMeta = <T>() => {
  const [attributes, setNodeAttributes] = useState<Record<string, any>>();
  const [getNodeAttributes, swallowNodeAttributes] = useState<T>();
  const [menuProps, setMenuProps] =
    useState<Omit<RetapToolbarProps, "editor">>();
  const modalProps = useDisclosure();

  return {
    attributes,
    setNodeAttributes,
    getNodeAttributes,
    swallowNodeAttributes,
    menuProps,
    setMenuProps,
    modalProps,
  };
};

export { useNodeMeta };
