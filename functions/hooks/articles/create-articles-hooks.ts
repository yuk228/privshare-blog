import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

type FormValues = {
  title: string;
  description: string;
  content: string;
  slug: string;
};

type UseCreateArticle = {
  formik: ReturnType<typeof useFormik<FormValues>>;
  setToken: (token: string) => void;
};

export function useCreateArticle(): UseCreateArticle {
  const [token, setToken] = useState("");

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      description: "",
      content: "",
      slug: "",
    },
    validationSchema: yup.object({
      title: yup
        .string()
        .required("Title is required")
        .max(255, "Title must be less than 255 characters"),
      description: yup
        .string()
        .required("Description is required")
        .max(255, "Description must be less than 255 characters"),
      content: yup.string().required("Content is required"),
      slug: yup
        .string()
        .required("Slug is required")
        .max(255, "Slug must be less than 255 characters"),
    }),
    onSubmit: values => {
      console.log(values, token);
    },
  });
  return {
    formik,
    setToken,
  };
}
