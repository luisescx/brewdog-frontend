import { useCallback, useState } from "react";
import { signIn, SignInResponse } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AccountCircle,
  Lock,
  ErrorOutline
} from "@styled-icons/material-outlined";

import { FormLink, FormWrapper, FormLoading, FormError } from "components/Form";
import Button from "components/Button";
import TextField from "components/TextField";
import { ButtonLabel } from "./styles";

import { FieldErrors, signInValidate } from "utils/validations";

const FormSignIn = () => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const routes = useRouter();

  const handleInput = useCallback((field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setFormError("");
      setLoading(true);

      const errors = signInValidate(values);

      if (Object.keys(errors).length) {
        setFieldError(errors);
        setLoading(false);
        return;
      }

      setFieldError({});

      const result = (await signIn("credentials", {
        ...values,
        redirect: false
      })) as SignInResponse | undefined;

      if (result?.status === 200) {
        routes.push("/");
      }

      setLoading(false);

      if (result?.status === 401 && result.error === "CredentialsSignin") {
        setFormError("Username or password is invalid");
        return;
      }

      if (result?.status === 401) {
        setFormError("Please, try again later");
      }
    },
    [routes, values]
  );

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput("username", v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput("password", v)}
          icon={<Lock />}
        />

        <Button type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <ButtonLabel>Sign in now</ButtonLabel>}
        </Button>

        <FormLink>
          Don’t have an account?{" "}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
