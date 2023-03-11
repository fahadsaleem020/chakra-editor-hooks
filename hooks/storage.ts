import { UseStorage, StorageMeta } from "@chakra-editor/types";

const useStorage: UseStorage = (editor) =>
  editor?.storage as StorageMeta | undefined;

export { useStorage };
