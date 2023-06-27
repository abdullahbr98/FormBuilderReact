import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FormTab from "./FormTab";
import {
    Button,
    Checkbox,
    Link,
    Text,
    Textarea,
    Input,
    CheckboxGroup,
    Menu,
    MenuButton,
    Flex,
    Box,
    Wrap,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
function MainForm() {
    const [apiResponse, setApiResponse] = useState([]);
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [mainFormObject, setMainFormObject] = useState({});
    const [secondaryCoachingCheck, setSecondaryCoachingCheck] = useState(true);
    const [commitmentCheck, setCommitmentCheck] = useState(true);
    const [followUpDateCheck, setFollowUpDateCheck] = useState(true);
    const [createAccess, setCreateAccess] = useState(true);
    const [groupList] = useState(["1", "2", "3", "4", "5", "6"]);
    const [allChecked, setAllChecked] = useState(false);
    const [populatedGroupList, setpopulatedGroupList] = useState([]);
    const [indexValue, setIndexValue] = useState(1);
    const [showObject, setShowObject] = useState(false);
    const [mainName, setmainName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [groupError, setgroupError] = useState(false);
    const [mainDescription, setmainDescription] = useState("");
    const [descriptionError, setdescriptionError] = useState(false);
    const [formTabsArray, setFormTabsArray] = useState([
        {
            displayItem: "Primary Coach",
            description: "Primary Coach Description",
            indexValue: 0,
            key: 0,
            keyValue: Math.floor(Math.random() * 1045345341),
            numberOfCommitments: 0,
            createAccess: false,
            giveNoDeleteAccess: true,
            showNote: true,
            noteDescription: "notes instruction",
            showObject: showObject,
            setShowObject: setShowObject,
        },
    ]);

    const submitMainForm = (callbackFunction) => {
        mainDescription === ""
            ? setdescriptionError(true)
            : setdescriptionError(false);
        mainName === "" ? setNameError(true) : setNameError(false);
        populatedGroupList.length < 1
            ? setgroupError(true)
            : setgroupError(false);
        callbackFunction();
    };

    const submitMainFormCallback = () => {
        if (descriptionError || groupError || nameError) {
            console.log("error incomplete fields");
        } else {
            if (
                mainDescription !== "" &&
                populatedGroupList.length > 0 &&
                mainName !== ""
            ) {
                // console.log(mainFormObject); TODO
                setShowObject(true);
            } else {
                console.log("error incomplete fields");
            }
        }
    };

    const groupListPopulator = (value, event) => {
        console.log(value);
        console.log(event);
        if (populatedGroupList.includes(value)) {
            let arrayList = [...populatedGroupList];
            let index = arrayList.indexOf(value);
            arrayList.splice(index, 1);
            setpopulatedGroupList(arrayList);
        } else {
            if (value === "-1") {
                let arrayList = [...populatedGroupList];
                if (arrayList.length === groupList.length) {
                    arrayList = [];
                    setpopulatedGroupList(arrayList);
                    setAllChecked(false);
                } else {
                    arrayList = [...groupList];
                    setpopulatedGroupList(arrayList);
                    setAllChecked(true);
                }
            } else {
                let arrayList = [...populatedGroupList];
                arrayList.push(value);
                setpopulatedGroupList(arrayList);
            }
        }
    };

    const formTabAdder = (value) => {
        let i = Math.floor(Math.random() * 1045345341);
        if (value === "Secondary Coach" && secondaryCoachingCheck === true) {
            let x = [...formTabsArray];
            let obj = {
                description: "Edit secondary Coach Description",
                displayItem: value,
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                numberOfCommitments: 0,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
                showNote: true,
                setShowObject: setShowObject,
                noteDescription: "notes instruction",
                showObject: showObject,
            };

            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
            setSecondaryCoachingCheck(false);
        } else if (value === "Commitments" && commitmentCheck === true) {
            let x = [...formTabsArray];
            let obj = {
                description: "Edit commitment Description",
                displayItem: value,
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                numberOfCommitments: 1,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
                showNote: true,
                noteDescription: "notes instruction",
                showObject: showObject,
                setShowObject: setShowObject,
            };
            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
            setCommitmentCheck(false);
        } else if (value === "Follow Up Date" && followUpDateCheck === true) {
            let x = [...formTabsArray];
            let obj = {
                description: "Edit follow up date description",
                displayItem: value,
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                numberOfCommitments: 0,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
                showNote: true,
                noteDescription: "notes instruction",
                showObject: showObject,
                setShowObject: setShowObject,
            };
            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
            setFollowUpDateCheck(false);
        } else if (
            value !== "Follow Up Date" ||
            value !== "Commitments" ||
            value !== "Secondary Coach"
        ) {
            let x = [...formTabsArray];
            let obj = {
                displayItem: value,
                description: "Edit notes Description",
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                numberOfCommitments: 0,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
                showNote: true,
                noteDescription: "notes instruction",
                showObject: showObject,
                setShowObject: setShowObject,
            };
            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
        }
    };
    const formTabDeleter = (keyIdentifier, displayValue, indexValue) => {
        if (formTabsArray) {
            console.log("formTabsDeleteFunc:", formTabsArray);
            let x = [...formTabsArray];
            x.splice(indexValue, 1);
            setFormTabsArray(x);
            console.log(x);
        }
    };
    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    };
    const drop = (e) => {
        const copyListItems = [...formTabsArray];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setFormTabsArray(copyListItems);
    };
    const checker = () => {
        let flagSC = false;
        let flagCM = false;
        let flagFD = false;
        for (let x of formTabsArray) {
            if (x["displayItem"] === "Secondary Coach") {
                setSecondaryCoachingCheck(false);
                flagSC = true;
            }
            if (x["displayItem"] === "Commitments") {
                setCommitmentCheck(false);
                flagCM = true;
            }
            if (x["displayItem"] === "Follow Up Date") {
                setFollowUpDateCheck(false);
                flagFD = true;
            }
        }
        if (!flagSC) {
            setSecondaryCoachingCheck(true);
        }
        if (!flagCM) {
            setCommitmentCheck(true);
        }
        if (!flagFD) {
            setFollowUpDateCheck(true);
        }
    };

    useEffect(() => {
        const createDate = new Date();
        const obj = {
            FormName: mainName,
            Description: mainDescription,
            groupList: populatedGroupList,
            id: Math.floor(Math.random() * 1045345341),
            createdAt:
                createDate.getFullYear() +
                "/" +
                createDate.getMonth() +
                "/" +
                createDate.getDate(),
        };
        setMainFormObject({ ...obj });
        checker();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        formTabsArray,
        populatedGroupList,
        allChecked,
        showObject,
        nameError,
        descriptionError,
        groupError,
        mainName,
        mainDescription,
    ]);
    useEffect(() => {
        console.log("apiResponse:", formTabsArray);
    }, [formTabsArray]);

    return (
        <Box textAlign="center" w="100%" my="50px">
            <Box>
                <Wrap
                    justifyContent="right"
                    px="20px"
                    py="30px"
                    spacing={5}
                    justify="end"
                    bg="#fff"
                    borderWidth="1px"
                >
                    <Link
                        alignSelf="center"
                        fontSize="xs"
                        fontWeight="bold"
                        color="blue.300"
                    >
                        {" "}
                        RETURN TO COACHING FORMS{" "}
                    </Link>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            bg="white"
                            borderRadius="md"
                            borderWidth="1px"
                        >
                            Add To Form
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                value="Questions"
                                onClick={(e) => {
                                    formTabAdder(e.target.value);
                                }}
                            >
                                Questions
                            </MenuItem>
                            <MenuItem
                                value="Small Notes"
                                onClick={(e) => {
                                    formTabAdder(e.target.value);
                                }}
                            >
                                Notes - Small
                            </MenuItem>
                            <MenuItem
                                value="Large Notes"
                                onClick={(e) => {
                                    formTabAdder(e.target.value);
                                }}
                            >
                                Notes - Large
                            </MenuItem>
                            <MenuItem
                                value="Secondary Coach"
                                isDisabled={
                                    secondaryCoachingCheck ? false : true
                                }
                                onClick={(e) => {
                                    formTabAdder(e.target.value);
                                }}
                            >
                                Secondary Coaching
                            </MenuItem>
                            <MenuItem
                                value="Commitments"
                                isDisabled={commitmentCheck ? false : true}
                                onClick={(e) => {
                                    formTabAdder(e.target.value);
                                }}
                            >
                                Commitment
                            </MenuItem>
                            <MenuItem
                                value="Follow Up Date"
                                isDisabled={followUpDateCheck ? false : true}
                                onClick={(e) => {
                                    formTabAdder(e.target.value);
                                }}
                            >
                                Follow Up Date
                            </MenuItem>
                            <MenuItem
                                value="Attachment"
                                onClick={(e) => {
                                    formTabAdder(e.target.value);
                                }}
                            >
                                Attachments
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Button
                        colorScheme="blue"
                        onClick={() => {
                            submitMainForm(submitMainFormCallback);
                        }}
                    >
                        Save Only
                    </Button>
                    <Button colorScheme="blue">Save & Publish </Button>
                </Wrap>
                <Box
                    align="left"
                    px="20px"
                    py="30px"
                    spacing={5}
                    bg="#fff"
                    borderWidth="1px"
                    mt="-1px"
                >
                    <Flex>
                        <Box w="100%">
                            <Flex>
                                <Box w="50%" p={3}>
                                    <Text
                                        mb="8px"
                                        color="#3f536e"
                                        fontWeight={500}
                                    >
                                        NAME{" "}
                                    </Text>
                                    <Input
                                        placeholder="Form Name"
                                        size="md"
                                        py="20px"
                                        borderRadius="6px"
                                        onChange={(e) => {
                                            setmainName(e.target.value);
                                            if (e.target.value !== "") {
                                                setNameError(false);
                                            } else {
                                                setNameError(true);
                                            }
                                        }}
                                    />
                                    {nameError ? (
                                        <span
                                            style={{
                                                color: "red",
                                                paddingLeft: "3px",
                                            }}
                                        >
                                            This field is required.
                                        </span>
                                    ) : null}
                                </Box>
                                <Box w="50%" p={3}>
                                    <Text
                                        mb="8px"
                                        color="#3f536e"
                                        fontWeight={500}
                                    >
                                        GROUPS{" "}
                                    </Text>
                                    <Menu closeOnSelect={false}>
                                        <MenuButton
                                            as={Button}
                                            rightIcon={<ChevronDownIcon />}
                                            bg="white"
                                            borderRadius="md"
                                            borderWidth="1px"
                                            w={"100%"}
                                            textAlign="start"
                                            color="gray.500"
                                            fontSize="md"
                                            fontWeight="thinner"
                                            py="20px"
                                            overflow="hidden"
                                        >
                                            {populatedGroupList.length > 0
                                                ? populatedGroupList.map(
                                                      (index) => {
                                                          return `Group ${index} ,`;
                                                      }
                                                  )
                                                : "Select..."}
                                        </MenuButton>
                                        <MenuList w="100%">
                                            <MenuItem minW="340px">
                                                <Checkbox
                                                    name={"-1"}
                                                    onChange={(e) => {
                                                        groupListPopulator(
                                                            e.target.name
                                                        );
                                                        console.log(e);
                                                    }}
                                                >
                                                    Select All
                                                </Checkbox>
                                            </MenuItem>
                                            <CheckboxGroup>
                                                {groupList.map(
                                                    (value, index) => {
                                                        return (
                                                            <MenuItem
                                                                minW="340px"
                                                                key={index}
                                                            >
                                                                <Checkbox
                                                                    isChecked={
                                                                        allChecked
                                                                            ? true
                                                                            : undefined
                                                                    }
                                                                    name={value}
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        groupListPopulator(
                                                                            e
                                                                                .target
                                                                                .name,
                                                                            e
                                                                        );
                                                                    }}
                                                                >
                                                                    Add Group{" "}
                                                                    {value}
                                                                </Checkbox>
                                                            </MenuItem>
                                                        );
                                                    }
                                                )}
                                            </CheckboxGroup>
                                        </MenuList>
                                    </Menu>
                                    {groupError ? (
                                        <span
                                            style={{
                                                color: "red",
                                                paddingLeft: "5px",
                                            }}
                                        >
                                            This field is required.
                                        </span>
                                    ) : null}
                                </Box>
                            </Flex>
                            <Box mt={2} p={3}>
                                <Text mb="8px" color="#3f536e" fontWeight={500}>
                                    DESCRIPTION{" "}
                                </Text>
                                <Textarea
                                    placeholder="Forms description"
                                    size="md"
                                    py="20px"
                                    borderRadius="6px"
                                    onChange={(e) => {
                                        setmainDescription(e.target.value);
                                        if (e.target.value !== "") {
                                            setdescriptionError(false);
                                        } else {
                                            setdescriptionError(true);
                                        }
                                    }}
                                />
                                {descriptionError ? (
                                    <span
                                        style={{
                                            color: "red",
                                            paddingLeft: "3px",
                                        }}
                                    >
                                        This field is required.
                                    </span>
                                ) : null}
                            </Box>
                        </Box>
                        <Box ms="20px" p="50px" w="50%">
                            <Flex>
                                <Checkbox
                                    defaultChecked
                                    mx={2}
                                    mt={1}
                                    alignSelf="start"
                                ></Checkbox>
                                <Text fontSize="sm">
                                    By checking this box, all coaching sessions
                                    completed using this form will automatically
                                    be sent to the user to acknowledge coaching
                                    session completion and view all coaching
                                    session responses and notes.
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box>
                {formTabsArray
                    ? formTabsArray.map((components, index) => {
                          return (
                              <div
                                  onDragStart={(e) => dragStart(e, index)}
                                  onDragEnter={(e) => dragEnter(e, index)}
                                  onDragEnd={drop}
                                  key={index}
                                  draggable
                              >
                                  <FormTab
                                      showObject={showObject}
                                      setShowObject={setShowObject}
                                      sortIndex={index}
                                      displayItem={components["displayItem"]}
                                      indexValue={components["indexValue"]}
                                      formTabsArray={formTabsArray}
                                      setFormTabsArray={setFormTabsArray}
                                      createAccess={components["createAccess"]}
                                      setCreateAccess={
                                          components["setCreateAccess"]
                                      }
                                      key={index}
                                      formTabDeleter={formTabDeleter}
                                      keyValue={components["keyValue"]}
                                      giveNoDeleteAccess={
                                          components["giveNoDeleteAccess"]
                                      }
                                      apiResponse={apiResponse}
                                      setApiResponse={setApiResponse}
                                      numberOfCommitments={components["numberOfCommitments"]}
                                  />
                              </div>
                          );
                      })
                    : console.log("not exist")}
            </Box>
        </Box>
    );
}
export default MainForm;

//how data will be shown
// {
//     "type": "primaryCoaching",
//     "description": "Edit Primary Coaching Description",
//     "isNotesSectionAdded": true,
//     "isRequired": true,
//     "notesInstruction": "notes instructions",
//     "commitmentsCount": 1,
//     "includeDueDate": false,
//     "sortOrder": 1,
//     "_id": "6495d0f6142ac513ac692076",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.243Z",
//     "updatedAt": "2023-06-23T17:05:58.243Z",
//     "__v": 0
// },
// {
//     "type": "question",
//     "description": "Question name ",
//     "isNotesSectionAdded": true,
//     "isRequired": true,
//     "notesInstruction": "Note",
//     "commitmentsCount": 1,
//     "includeDueDate": false,
//     "sortOrder": 2,
//     "_id": "6495d0f6142ac513ac692077",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.243Z",
//     "updatedAt": "2023-06-23T17:05:58.243Z",
//     "__v": 0
// },
// {
//     "type": "largeNote",
//     "description": "large notes",
//     "isNotesSectionAdded": false,
//     "isRequired": true,
//     "notesInstruction": "Provide detailed coaching feedback.",
//     "commitmentsCount": 1,
//     "includeDueDate": false,
//     "sortOrder": 3,
//     "_id": "6495d0f6142ac513ac692078",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.244Z",
//     "updatedAt": "2023-06-23T17:05:58.244Z",
//     "__v": 0
// },
// {
//     "type": "commitment",
//     "description": "commitment descriptions",
//     "isNotesSectionAdded": true,
//     "isRequired": true,
//     "notesInstruction": "ins",
//     "commitmentsCount": 11,
//     "includeDueDate": true,
//     "sortOrder": 4,
//     "_id": "6495d0f6142ac513ac692079",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.244Z",
//     "updatedAt": "2023-06-23T17:05:58.244Z",
//     "__v": 0
// },
// {
//     "type": "smallNote",
//     "description": "Small notes",
//     "isNotesSectionAdded": false,
//     "isRequired": true,
//     "notesInstruction": "Provide detailed coaching feedback.",
//     "commitmentsCount": 1,
//     "includeDueDate": false,
//     "sortOrder": 5,
//     "_id": "6495d0f6142ac513ac69207a",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.244Z",
//     "updatedAt": "2023-06-23T17:05:58.244Z",
//     "__v": 0
// },
// {
//     "type": "secondaryCoaching",
//     "description": "secondary coaching description",
//     "isNotesSectionAdded": true,
//     "isRequired": true,
//     "notesInstruction": "Provide detailed coaching feedback.",
//     "commitmentsCount": 1,
//     "includeDueDate": false,
//     "sortOrder": 6,
//     "_id": "6495d0f6142ac513ac69207b",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.244Z",
//     "updatedAt": "2023-06-23T17:05:58.244Z",
//     "__v": 0
// },
// {
//     "type": "attachment",
//     "description": "attachment description",
//     "isNotesSectionAdded": true,
//     "isRequired": true,
//     "notesInstruction": "hello",
//     "commitmentsCount": 1,
//     "includeDueDate": false,
//     "sortOrder": 7,
//     "_id": "6495d0f6142ac513ac69207c",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.244Z",
//     "updatedAt": "2023-06-23T17:05:58.244Z",
//     "__v": 0
// },
// {
//     "type": "followUpDate",
//     "description": "follow up date description",
//     "isNotesSectionAdded": true,
//     "isRequired": true,
//     "notesInstruction": "Provide detailed coaching feedback.",
//     "commitmentsCount": 1,
//     "includeDueDate": false,
//     "sortOrder": 8,
//     "_id": "6495d0f6142ac513ac69207d",
//     "organization": "624ab8a176497e5d1eca9ba1",
//     "coachingForm": "648c1913142ac513ac692048",
//     "createdAt": "2023-06-23T17:05:58.244Z",
//     "updatedAt": "2023-06-23T17:05:58.244Z",
//     "__v": 0
// }
