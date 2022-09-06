import React from "react";

import { ComponentMeta } from "@storybook/react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const Default = args => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} {...args}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            assumenda impedit ut voluptatem consectetur quod dicta temporibus
            reiciendis deserunt magni, debitis pariatur molestias laborum, nemo
            ducimus magnam quibusdam a placeat?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="accent">Accept or smth</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;
