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
    const [testArray, settestArray] = useState([1, 2, 3, 4, 5, 6]);
    const [formTabsArray, setFormTabsArray] = useState([
        <FormTab
            displayItem="Primary Coach"
            key={420}
            keyValue={420}
            indexValue={0}
        />,
    ]);
    const [secondaryCoachingCheck, setSecondaryCoachingCheck] = useState(true);
    const [commitmentCheck, setCommitmentCheck] = useState(true);
    const [followUpDateCheck, setFollowUpDateCheck] = useState(true);
    const [createAccess, setCreateAccess] = useState(true);
    const [groupList, setGroupList] = useState(["1", "2", "3", "4", "5", "6"]);
    const [allChecked, setAllChecked] = useState(false);
    const [populatedGroupList, setpopulatedGroupList] = useState([]);
    const [indexValue, setIndexValue] = useState(1);

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
            let obj = (
                <FormTab
                    displayItem={value}
                    indexValue={indexValue}
                    formTabsArray={formTabsArray}
                    // key={i}
                    createAccess={createAccess}
                    setCreateAccess={setCreateAccess}
                    formTabDeleter={formTabDeleter}
                    keyValue={i}
                />
            );
            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
            setSecondaryCoachingCheck(false);
        } else if (value === "Commitments" && commitmentCheck === true) {
            let x = [...formTabsArray];
            let obj = (
                <FormTab
                    displayItem={value}
                    indexValue={indexValue}
                    formTabsArray={formTabsArray}
                    // key={i}
                    createAccess={createAccess}
                    setCreateAccess={setCreateAccess}
                    formTabDeleter={formTabDeleter}
                    keyValue={i}
                />
            );
            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
            setCommitmentCheck(false);
        } else if (value === "Follow Up Date" && followUpDateCheck === true) {
            let x = [...formTabsArray];
            let obj = (
                <FormTab
                    displayItem={value}
                    indexValue={indexValue}
                    formTabsArray={formTabsArray}
                    // key={i}
                    createAccess={createAccess}
                    setCreateAccess={setCreateAccess}
                    formTabDeleter={formTabDeleter}
                    keyValue={i}
                />
            );
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
            let obj = (
                <FormTab
                    displayItem={value}
                    indexValue={indexValue}
                    formTabsArray={formTabsArray}
                    // key={i}
                    createAccess={createAccess}
                    setCreateAccess={setCreateAccess}
                    formTabDeleter={formTabDeleter}
                    keyValue={i}
                />
            );
            x.push(obj);
            setIndexValue(indexValue + 1);
            setFormTabsArray(x);
        }
    };
    const formTabDeleter = (keyIdentifier, displayValue, indexValue) => {
        if (formTabsArray) {
            console.log("formTabsDeleteFunc:", formTabsArray);
            // let x = [...formTabsArray];
            // // x.splice(indexValue, 1);
            // // setFormTabsArray(x);
            // x.map((component) => {
            //     return console.log(component);
            // });
            console.log(indexValue);
        }
    };
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
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

    useEffect(() => {
        console.log("in UseEffect of main:", formTabsArray);
    }, [formTabsArray, populatedGroupList, allChecked, testArray]);
    return (
        <Box textAlign="center" w="100%" my="50px">
            <Box id="mainContainer">
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
                    <Button colorScheme="blue">Save Only</Button>
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
                                    />
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
                                />
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
            <Box id="main-div">
                {formTabsArray
                    ? formTabsArray.map((components, index) => {
                          return (
                              <div
                                  //   style={{
                                  //       backgroundColor: "lightblue",
                                  //       margin: "20px 25%",
                                  //       textAlign: "center",
                                  //       fontSize: "40px",
                                  //   }}
                                  onDragStart={(e) => dragStart(e, index)}
                                  onDragEnter={(e) => dragEnter(e, index)}
                                  onDragEnd={drop}
                                  key={index}
                                  draggable
                              >
                                  {components}
                              </div>
                          );
                      })
                    : console.log("not exist")}
            </Box>
        </Box>
    );
}
export default MainForm;
