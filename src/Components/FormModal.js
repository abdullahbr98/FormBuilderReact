import React, { useState } from "react";
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
    keyValue,
    setCreateAccess,
    createAccess,
    isOpen,
    onClose,
    displayItem,
    formTabsArray,
    setFormTabsArray,
    descriptionOriginal,
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
    showCommitDatesOriginal,
    setshowCommitDatesOriginal,
}) {
    const [createAccessModifier, setcreateAccessModifier] = useState(0);
    const cancelFunction = (callbackFunc) => {
        if (createAccess || createAccessModifier === 0) {
            let arrayValue = [...formTabsArray];
            if (
                arrayValue[arrayValue.length - 1]["displayItem"] ===
                    displayItem &&
                arrayValue[arrayValue.length - 1]["displayItem"] !==
                    "Primary Coach"
            ) {
                arrayValue.pop();
                setFormTabsArray(arrayValue);
                console.log("cancelled");
            }
            setcreateAccessModifier(1);
        }
        callbackFunc();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent textAlign="left">
                    <ModalHeader>Edit {displayItem} </ModalHeader>
                    <hr />
                    <ModalCloseButton
                        onClick={() => {
                            cancelFunction(onClose);
                        }}
                    />
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
                                                for (let x in formTabsArray) {
                                                    if (
                                                        formTabsArray[x][
                                                            "keyValue"
                                                        ] === keyValue
                                                    ) {
                                                        formTabsArray[x][
                                                            "numberOfCommitments"
                                                        ] = e;
                                                    }
                                                }
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
                                        }}
                                        mt={3}
                                        color="gray"
                                        fontWeight="medium"
                                    >
                                        Include Due dates for Each Commit
                                    </Checkbox>
                                </Box>
                            ) : null}

                            {displayItem !== "Small Notes" &&
                            displayItem !== "Large Notes" ? (
                                <div display="hidden">
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
                                                    for (let x in formTabsArray) {
                                                        if (
                                                            formTabsArray[x][
                                                                "keyValue"
                                                            ] === keyValue
                                                        ) {
                                                            formTabsArray[x][
                                                                "showNote"
                                                            ] = true;
                                                        }
                                                    }
                                                }}
                                            >
                                                Yes
                                            </MenuItem>
                                            <MenuItem
                                                onClick={() => {
                                                    setShowNote("none");
                                                    for (let x in formTabsArray) {
                                                        if (
                                                            formTabsArray[x][
                                                                "keyValue"
                                                            ] === keyValue
                                                        ) {
                                                            formTabsArray[x][
                                                                "showNote"
                                                            ] = false;
                                                        }
                                                    }
                                                }}
                                            >
                                                No
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            ) : null}
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
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    cancelFunction(onClose);
                                }}
                            >
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
