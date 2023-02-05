import React from "react";
declare const useForm: <T>(initialData?: T | undefined) => {
    handler: (e: React.FormEvent<HTMLFormElement>) => T;
    previous: T | undefined;
};
export { useForm };
