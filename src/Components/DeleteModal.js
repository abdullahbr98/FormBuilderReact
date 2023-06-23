import React, { useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Button,
    Text,
    useDisclosure,
    ModalBody,
    ModalCloseButton,
    Wrap,
} from "@chakra-ui/react";

export default function DeleteModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <hr />
                    <ModalBody py={10} fontSize="md">
                        <Text>
                            Deleting this coaching step will permanently delete
                            it from Original Form coaching form.
                        </Text>
                        <Text mt={4}>
                            Are you sure you want to delete this coaching step?
                        </Text>
                    </ModalBody>
                    <hr />
                    <ModalFooter>
                        <Wrap justify="space-between" w="100%">
                            <Button
                                colorScheme="blue"
                                variant="outline"
                                borderWidth="2px"
                                px={8}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme="red" px={8}>
                                Delete
                            </Button>
                        </Wrap>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
