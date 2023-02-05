import React, { useState } from "react";

const useForm = <T>(initialData?: T) => {
  const [previous, setPrevious] = useState<T | undefined>(initialData);

  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data) as T;

    setPrevious(formData);
    return formData;
  };

  return {
    handler,
    previous,
  };
};

export { useForm };
