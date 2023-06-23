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
            showObject: showObject,
            setShowObject: setShowObject,
            displayItem: "Primary Coach",
            indexValue: 0,
            key: 0,
            keyValue: Math.floor(Math.random() * 1045345341),
            createAccess: false,
            giveNoDeleteAccess: true,
        },
    ]);

    const submitMainForm = (callbackFunction) => {
        mainDescription === ""
            ? setdescriptionError(true)
            : setdescriptionError(false);
        mainName === "" ? setNameError(true) : setNameError(false);
        populatedGroupList.length === 0
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
                populatedGroupList.length !== 0 &&
                mainName !== ""
            ) {
                console.log(mainFormObject);
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
        if (populatedGroupList.length > 0) {
            setgroupError(true);
        } else {
            setgroupError(false);
        }
    };

    const formTabAdder = (value) => {
        let i = Math.floor(Math.random() * 1045345341);
        if (value === "Secondary Coach" && secondaryCoachingCheck === true) {
            let x = [...formTabsArray];
            let obj = {
                showObject: showObject,
                setShowObject: setShowObject,
                displayItem: value,
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
            };

            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
            setSecondaryCoachingCheck(false);
        } else if (value === "Commitments" && commitmentCheck === true) {
            let x = [...formTabsArray];
            let obj = {
                showObject: showObject,
                setShowObject: setShowObject,
                displayItem: value,
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
            };
            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
            setCommitmentCheck(false);
        } else if (value === "Follow Up Date" && followUpDateCheck === true) {
            let x = [...formTabsArray];
            let obj = {
                showObject: showObject,
                setShowObject: setShowObject,
                displayItem: value,
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
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
                showObject: showObject,
                setShowObject: setShowObject,
                displayItem: value,
                indexValue: indexValue,
                formTabsArray: formTabsArray,
                // key={i}
                createAccess: createAccess,
                setCreateAccess: setCreateAccess,
                formTabDeleter: formTabDeleter,
                keyValue: i,
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
                                            Name is Required
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
                                                                        console.log(
                                                                            "worked"
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
                                            Group is Required
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
                                        Description is Required
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
