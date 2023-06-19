import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    NumberInput,
    NumberIncrementStepper,
    ModalContent,
    Button,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberInputField,
    FormControl,
    FormLabel,
    ModalHeader,
    Checkbox,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Textarea,
    Menu,
    MenuButton,
    Flex,
    Box,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
export default function FormModal({
    isOpen,
    onClose,
    displayItem,
    description,
    setDescription,
    errorDesc,
    setShowNote,
    showNote,
    setNote,
    note,
    notesError,
    setCheckedRequired,
    disableButton,
    updateFormValues,
    setshowCommitDates,
    showCommitDates,
    setnoOfCommits,
}) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent textAlign="left">
                    <ModalHeader>Edit {displayItem} </ModalHeader>
                    <hr />
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="primaryCoachForm">
                            {displayItem !== "Small Notes" &&
                            displayItem !== "Large Notes" ? (
                                <>
                                    <FormLabel fontWeight="bold" color="gray">
                                        Description
                                    </FormLabel>
                                    <Textarea
                                        value={description}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                    >
                                        {description}
                                    </Textarea>
                                    {errorDesc ? (
                                        <span
                                            style={{
                                                color: "red",
                                                paddingLeft: "3px",
                                            }}
                                        >
                                            Description is Required
                                        </span>
                                    ) : null}
                                </>
                            ) : null}
                            {displayItem === "Commitments" ? (
                                <Box>
                                    <Flex py={2}>
                                        <Text alignSelf="center" me={3}>
                                            Enter Number Of Commits
                                        </Text>
                                        <NumberInput
                                            size="md"
                                            maxW={24}
                                            defaultValue={1}
                                            max={50}
                                            min={1}
                                            onChange={(e) => {
                                                setnoOfCommits(e);
                                            }}
                                        >
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </Flex>
                                    <Checkbox
                                        defaultChecked
                                        onChange={(e) => {
                                            setshowCommitDates(
                                                e.target.checked
                                            );
                                            console.log(showCommitDates);
                                        }}
                                        mt={3}
                                        color="gray"
                                        fontWeight="medium"
                                    >
                                        Include Due dates for Each Commit
                                    </Checkbox>
                                </Box>
                            ) : null}
                            <Text fontWeight="bold" color="gray" mt={3}>
                                Notes Selection
                            </Text>
                            <Menu>
                                <MenuButton
                                    w="100%"
                                    as={Button}
                                    rightIcon={<ChevronDownIcon />}
                                    bg="white"
                                    borderRadius="md"
                                    borderWidth="1px"
                                    textAlign="start"
                                    color="gray"
                                >
                                    Notes Selection
                                </MenuButton>
                                <MenuList>
                                    <MenuItem
                                        onClick={() => {
                                            setShowNote("block");
                                        }}
                                    >
                                        Yes
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            setShowNote("none");
                                        }}
                                    >
                                        No
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Box display={showNote}>
                                <Text fontWeight="bold" color="gray" mt={3}>
                                    Notes Instruction
                                </Text>
                                <Textarea
                                    value={note}
                                    onChange={(e) => {
                                        setNote(e.target.value);
                                    }}
                                >
                                    {note}
                                </Textarea>

                                {notesError ? (
                                    <span
                                        style={{
                                            color: "red",
                                            paddingLeft: "3px",
                                        }}
                                    >
                                        Notes are Required
                                    </span>
                                ) : null}
                            </Box>
                            <Checkbox
                                defaultChecked
                                onChange={(e) => {
                                    setCheckedRequired(e.target.checked);
                                }}
                                mt={3}
                                color="gray"
                                fontWeight="medium"
                            >
                                This coaching form item is required
                            </Checkbox>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Flex justifyContent="space-between" w="100%">
                            <Button variant="ghost" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="blue"
                                mr={3}
                                isDisabled={disableButton}
                                onClick={() => {
                                    updateFormValues(onClose);
                                }}
                            >
                                Update
                            </Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
