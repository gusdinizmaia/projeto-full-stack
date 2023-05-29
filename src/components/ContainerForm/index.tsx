import { useState } from "react";
import { FormLogin } from "../FormLogin";
import { FormRegister } from "../FormRegister";

export const ContainerForm = () => {
  const [form, setForm] = useState("login");
  return (
    <section>
      {form === "login" ? (
        <FormLogin redirect={setForm} />
      ) : (
        <FormRegister redirect={setForm} />
      )}
    </section>
  );
};
