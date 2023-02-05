import { RetapDisclosureMeta, UseDisclosePropsExtended } from "@retap/types";
import { useState } from "react";

const useRetapDisclosure = (): RetapDisclosureMeta => {
  const [modalId, setModalId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const disclosureProps: UseDisclosePropsExtended = {
    id: modalId,
    isOpen: isOpen,
    defaultIsOpen: isOpen,
    onClose: () => setIsOpen(false),
    onOpen: (id) => {
      setModalId(id);
      setIsOpen(true);
    },
  };

  return { disclosureProps };
};

export { useRetapDisclosure };
