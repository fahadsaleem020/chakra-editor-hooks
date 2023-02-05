import { UseStorage, StorageMeta } from "@retap/types";

const useStorage: UseStorage = (editor) =>
  editor?.storage as StorageMeta | undefined;

export { useStorage };
