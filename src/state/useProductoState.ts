import { SubmitHandler, useForm, UseFormMethods } from "react-hook-form";
import { IProductoForm } from "../interfaces/IProductoForm";

export interface IProductoState {
  form: UseFormMethods<TProductoForm>;
  actions: {
    handleSubmitForm: SubmitHandler<TProductoForm>;
  };
}

export type TProductoForm = IProductoForm;

export const useProductoState = (): IProductoState => {
  /**
   * Hook form init values
   */
  const form = useForm<TProductoForm>({
    defaultValues: {
      name: "",
      price:{
          discount:0,
          unit:0
      },
      description:"",
      status:false
    },
    mode: "onBlur",
    reValidateMode: "onBlur"
  });

  const handleSubmitForm: SubmitHandler<TProductoForm> = async formData => {
    alert(JSON.stringify({ ...formData }, undefined, 2));
  };

  return {
    form,
    actions: {
      handleSubmitForm
    }
  };
};
