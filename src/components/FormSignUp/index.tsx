import Link from "next/link";
import { signIn, SignInResponse } from "next-auth/react";
import {
  AccountCircle,
  ErrorOutline,
  Lock
} from "@styled-icons/material-outlined";
import { useRouter } from "next/router";
import { FormWrapper, FormLink, FormLoading, FormError } from "components/Form";
import Button from "components/Button";
import TextField from "components/TextField";
import React, { useCallback, useState } from "react";
import { FieldErrors, signUpValidate } from "utils/validations";
import { ButtonLabel } from "./styles";
import { api } from "services/api";
import axios from "axios";

type Error = {
  statusCode: number;
  message: string;
};

const DEFAULT_ERROR_MSG = "Please try again later";

const FormSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const routes = useRouter();

  const handleInput = useCallback((field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setFormError("");
      setLoading(true);

      const errors = signUpValidate(values);

      if (Object.keys(errors).length) {
        setFieldError(errors);
        setLoading(false);
        return;
      }

      setFieldError({});

      try {
        const response = await api.post("auth/signUp", {
          username: values.username,
          password: values.password
        });

        const { data } = response;

        if (data.id) {
          const result = (await signIn("credentials", {
            ...values,
            redirect: false
          })) as SignInResponse | undefined;

          if (result?.status === 200) {
            routes.push("/");
          }
          return;
        }

        setFormError(DEFAULT_ERROR_MSG);
      } catch (error) {
        let msg = DEFAULT_ERROR_MSG;

        if (axios.isAxiosError(error)) {
          const errorData = error.response?.data as Error;
          if (errorData.message) {
            msg = errorData.message;
          }
        }

        setFormError(msg);
      }

      setLoading(false);
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
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput("confirm_password", v)}
          icon={<Lock />}
        />

        <Button type="submit" disabled={loading}>
          {loading ? <FormLoading /> : <ButtonLabel>Sign up now</ButtonLabel>}
        </Button>

        <FormLink>
          Already have an account?{" "}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
