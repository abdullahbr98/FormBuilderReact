import React, { useState, useEffect } from "react";

import "../App.css";
// import $ from "jquery";
// import "jquery-validation";
import { ChevronDownIcon, DragHandleIcon } from "@chakra-ui/icons";
import FormModal from "./FormModal";
import { AiOutlineMore } from "react-icons/ai";
import {
    RadioGroup,
    Stack,
    Radio,
    InputRightAddon,
    FormControl,
    FormLabel,
    useDisclosure,
    Text,
    Textarea,
    Input,
    Menu,
    MenuButton,
    InputGroup,
    InputRightElement,
    Flex,
    Box,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
export default function FormTab({
    displayItem,
    createAccess,
    setCreateAccess,
    giveNoDeleteAccess,
    sortIndex,
    formTabsArray,
    keyValue,
    formTabDeleter,
    indexValue,
    showObject,
    setShowObject,
}) {
    const [description, setDescription] = useState("default description");
    const [note, setNote] = useState("default note");
    const [descriptionOriginal, setDescriptionOriginal] = useState(
        "Description Original"
    );
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [noteOriginal, setNoteOriginal] = useState("Note Original");
    const [showNote, setShowNote] = useState("block");
    const [showNoteOriginal, setShowNoteOriginal] = useState("block");
    const [errorDesc, setErrorDesc] = useState(false);
    const [notesError, setNotesError] = useState(false);
    const [disableButton, setdisableButton] = useState(false);
    const [checkedRequired, setCheckedRequired] = useState(true);
    const [noOfCommits, setnoOfCommits] = useState(1);
    const [showCommitDates, setshowCommitDates] = useState(true);
    const [commitmentArray, setcommitmentArray] = useState([]);
    const [createAccessChecker, setcreateAccessChecker] = useState(0);
    useEffect(() => {
        if (createAccess && createAccessChecker === 0) {
            onOpen();
            setcreateAccessChecker(1);
        }
        let x = [];
        for (let i = 0; i < noOfCommits; i++) {
            x.push(
                <Flex justifyContent="space-between" key={i}>
                    <Box w="90%" p={3}>
                        <Flex>
                            <Text alignSelf="center" pe={5}>
                                C{i + 1}
                            </Text>
                            <Input placeholder="Enter Commitment" disabled />
                        </Flex>
                    </Box>
                    <Box
                        alignSelf="center"
                        me={3}
                        w="15%"
                        display={showCommitDates ? "block" : "none"}
                    >
                        <Input placeholder="Select Date" disabled />
                    </Box>
                </Flex>
            );
            setcommitmentArray(x);
        }
        note === "" ? setNotesError(true) : setNotesError(false);
        description === "" ? setErrorDesc(true) : setErrorDesc(false);
        errorDesc || notesError
            ? setdisableButton(true)
            : setdisableButton(false);
        displayItem === "Small Notes" || displayItem === "Large Notes"
            ? setShowNote(true)
            : setShowNote(false);
        const obj = {
            ...(displayItem === "Commitments"
                ? { commitmentsCount: noOfCommits }
                : {}),
            description:
                displayItem === "Small Notes" || displayItem === "Large Notes"
                    ? noteOriginal
                    : descriptionOriginal,
            required: checkedRequired,
            id: keyValue,
            type: displayItem,
            sortIndex: sortIndex,
            isNotesSectionAdded: showNote === "none" ? false : true,
        };
        if (showObject) {
            console.log(obj);
            setShowObject(false);
        }
    }, [
        note,
        noteOriginal,
        descriptionOriginal,
        checkedRequired,
        keyValue,
        description,
        disableButton,
        indexValue,
        formTabDeleter,
        formTabsArray,
        errorDesc,
        notesError,
        displayItem,
        noOfCommits,
        showCommitDates,
        createAccess,
        createAccessChecker,
        onOpen,
        showObject,
        setShowObject,
        sortIndex,
        showNote,
    ]);
    const updateFormValues = (callbackFunc) => {
        //TODO show form values  in console.
        if (!notesError && !errorDesc) {
            setNoteOriginal(note);
            setDescriptionOriginal(description);
            setShowNoteOriginal(showNote);
            callbackFunc();
        } else {
            console.log("error man");
        }
    };

    return (
        <>
            {/* MODAL PRIMARY COACH */}
            <FormModal
                isOpen={isOpen}
                onClose={onClose}
                displayItem={displayItem}
                description={description}
                setDescription={setDescription}
                errorDesc={errorDesc}
                setShowNote={setShowNote}
                showNote={showNote}
                setNote={setNote}
                note={note}
                notesError={notesError}
                setCheckedRequired={setCheckedRequired}
                disableButton={disableButton}
                updateFormValues={updateFormValues}
                setnoOfCommits={setnoOfCommits}
                setshowCommitDates={setshowCommitDates}
                showCommitDates={showCommitDates}
                createAccess={createAccess}
                setCreateAccess={setCreateAccess}
            />
            {/* MODAL PRIMARY COACH */}
            <Box
                align="left"
                px="20px"
                py="30px"
                spacing={5}
                bg="#FFF"
                borderWidth="1px"
                mt="-2px"
            >
                <FormControl
                    isRequired={checkedRequired}
                    cursor="grab"
                    id="main-form"
                >
                    <Flex>
                        <Box alignSelf="center" px="10px">
                            <DragHandleIcon cursor="grab" />
                        </Box>
                        <Box w="100%">
                            {displayItem === "Primary Coach" ||
                            displayItem === "Secondary Coach" ? (
                                <Flex>
                                    <Box w="50%" p={3}>
                                        <FormLabel
                                            mb="8px"
                                            color="#3f536e"
                                            fontWeight={500}
                                        >
                                            {descriptionOriginal}
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                disabled
                                                placeholder="Select One"
                                                size="md"
                                                py="20px"
                                                borderRadius="6px"
                                            />
                                            <InputRightElement>
                                                <ChevronDownIcon />
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                </Flex>
                            ) : null}

                            {displayItem === "Questions" ? (
                                <Flex justifyContent="space-between">
                                    <Box w="50%" p={3}>
                                        <FormLabel
                                            mb="8px"
                                            color="#3f536e"
                                            fontWeight={500}
                                        >
                                            {descriptionOriginal}
                                        </FormLabel>
                                    </Box>
                                    <Box alignSelf="center" me={3}>
                                        <RadioGroup>
                                            <Stack direction="row">
                                                <Radio value="1">Yes</Radio>
                                                <Radio value="2">No</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Box>
                                </Flex>
                            ) : null}
                            {displayItem === "Commitments" ? (
                                <>
                                    <Flex justifyContent="left">
                                        <Box w="85%" p={3}>
                                            <FormLabel
                                                mb="8px"
                                                color="#3f536e"
                                                fontWeight={500}
                                            >
                                                Commitment Description
                                            </FormLabel>
                                        </Box>
                                        <Box
                                            alignSelf="center"
                                            me={3}
                                            display={
                                                showCommitDates
                                                    ? "block"
                                                    : "none"
                                            }
                                        >
                                            <Text
                                                mb="8px"
                                                color="#3f536e"
                                                fontWeight={500}
                                            >
                                                Due Date
                                            </Text>
                                        </Box>
                                    </Flex>
                                    {commitmentArray}
                                </>
                            ) : null}
                            {displayItem === "Follow Up Date" ? (
                                <Flex>
                                    <Box w="35%" p={3}>
                                        <FormLabel
                                            mb="8px"
                                            color="#3f536e"
                                            fontWeight={500}
                                        >
                                            Follow Up Date Description
                                        </FormLabel>
                                        <Input
                                            disabled
                                            placeholder="Select Date"
                                            size="md"
                                            py="20px"
                                            borderRadius="6px"
                                        />
                                    </Box>
                                </Flex>
                            ) : null}
                            {displayItem === "Attachment" ? (
                                <Flex>
                                    <Box w="30%" p={3}>
                                        <FormLabel
                                            mb="8px"
                                            color="#3f536e"
                                            fontWeight={500}
                                        >
                                            Attachment Description
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                disabled
                                                placeholder="File Limited to 2GB"
                                                size="md"
                                                py="20px"
                                                borderRadius="6px"
                                            />
                                            <InputRightAddon
                                                py="20px"
                                                children="Browse"
                                                cursor="pointer"
                                            />
                                        </InputGroup>
                                    </Box>
                                </Flex>
                            ) : null}
                            <Box mt={2} p={3} display={showNoteOriginal}>
                                {displayItem === "Small Notes" ||
                                displayItem === "Large Notes" ? (
                                    <FormLabel
                                        mb="8px"
                                        color="#3f536e"
                                        fontWeight={500}
                                    >
                                        {noteOriginal}
                                    </FormLabel>
                                ) : (
                                    <Text
                                        mb="8px"
                                        color="#3f536e"
                                        fontWeight={500}
                                    >
                                        {noteOriginal}
                                    </Text>
                                )}
                                <Textarea
                                    placeholder="Enter Notes"
                                    maxH={
                                        displayItem === "Small Notes"
                                            ? "150px"
                                            : "auto"
                                    }
                                    size="md"
                                    py="20px"
                                    borderRadius="6px"
                                    disabled
                                />
                            </Box>
                        </Box>
                        <Flex
                            ms="15px"
                            w="10%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Menu>
                                <MenuButton>
                                    <Box cursor="pointer">
                                        <AiOutlineMore size={25} />
                                    </Box>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={onOpen}>Edit</MenuItem>
                                    {giveNoDeleteAccess ? null : (
                                        <MenuItem
                                            onClick={() => {
                                                formTabDeleter(
                                                    keyValue,
                                                    displayItem,
                                                    sortIndex
                                                );
                                            }}
                                        >
                                            Delete
                                        </MenuItem>
                                    )}
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                </FormControl>
            </Box>
        </>
    );
}
