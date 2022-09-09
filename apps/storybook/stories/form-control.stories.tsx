import React, { useState } from "react";

import { ComponentMeta } from "@storybook/react";

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const Default = args => {
  const [input, setInput] = useState("a@b.com");

  const handleInputChange = e => setInput(e.target.value);

  const checkEmailRegex = (value: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(value);
  };

  const isValid = checkEmailRegex(input);

  return (
    <FormControl {...args} isInvalid={!isValid}>
      <FormLabel>Email Address</FormLabel>
      <Input type="email" value={input} onChange={handleInputChange} />
      {!isValid ? (
        <FormErrorMessage>Error message</FormErrorMessage>
      ) : (
        <FormHelperText>We'll never share your email.</FormHelperText>
      )}
    </FormControl>
  );
};

export const Error = args => {
  const [input, setInput] = useState("i@am!in@valid@email");

  const handleInputChange = e => setInput(e.target.value);

  const checkEmailRegex = (value: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(value);
  };

  const isValid = checkEmailRegex(input);

  return (
    <FormControl {...args} isInvalid={!isValid}>
      <FormLabel>Email Address</FormLabel>
      <Input type="email" value={input} onChange={handleInputChange} />
      {!isValid ? (
        <FormErrorMessage>Error message</FormErrorMessage>
      ) : (
        <FormHelperText>We'll never share your email.</FormHelperText>
      )}
    </FormControl>
  );
};

export default {
  title: "Form",
  component: FormControl,
  argTypes: {
    isRequired: {
      control: { type: "boolean" },
    },
  },
  args: { isRequired: false },
} as ComponentMeta<typeof FormControl>;
