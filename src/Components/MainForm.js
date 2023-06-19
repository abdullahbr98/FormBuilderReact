import "../App.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FormTab from "./FormTab";
import {
    Button,
    Checkbox,
    Link,
    Text,
    Textarea,
    Input,
    Menu,
    MenuButton,
    Flex,
    Box,
    Wrap,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
function MainForm() {
    return (
        <Box textAlign="center" w="100%" my="50px">
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
                        <MenuItem>Questions</MenuItem>
                        <MenuItem>Notes - Small</MenuItem>
                        <MenuItem>Notes - Large</MenuItem>
                        <MenuItem>Secondary Coaching</MenuItem>
                        <MenuItem>Commitment</MenuItem>
                        <MenuItem>Follow Up Date</MenuItem>
                        <MenuItem>Attachments</MenuItem>
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
                                <Text mb="8px" color="#3f536e" fontWeight={500}>
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
                                <Text mb="8px" color="#3f536e" fontWeight={500}>
                                    GROUPS{" "}
                                </Text>
                                <Input
                                    placeholder="Form Groups Name"
                                    size="md"
                                    py="20px"
                                    borderRadius="6px"
                                />
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
                                completed using this form will automatically be
                                sent to the user to acknowledge coaching session
                                completion and view all coaching session
                                responses and notes.
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <FormTab displayItem="Primary Coach" />
            <FormTab displayItem="Secondary Coach" />
            <FormTab displayItem="Small Notes" />
            <FormTab displayItem="Large Notes" />
            <FormTab displayItem="Questions" />
            <FormTab displayItem="Commitments" />
            <FormTab displayItem="Attachment" />
            <FormTab displayItem="Follow Up Date" />
        </Box>
    );
}

export default MainForm;
