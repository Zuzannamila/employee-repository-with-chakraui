import users, { User } from "@/data/users"
import { Avatar, Box, Button, Center, Flex, Image, Text, useColorModeValue, } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

type UserProps = {
    user: User | null;
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = users.map((user) => ({
        params: {
            username: user.username
        }
    }));
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps<UserProps> = ({ params }) => {
    const user = users.find((user) => user.username === params?.username) || null;
    return {
        props: { user },
    };
}

const UserPage = ({ user }: UserProps) => {
    return (
        <Center
            marginTop={['0', '0', '8']}
            boxShadow="lg"
            minHeight="fit-content">
            <Box>
                <Box position="relative" width="100%">
                    <Image 
                        src={user?.cover_image}
                        width="100%"
                        height="250px"
                        objectFit="cover"/>
                    <Flex
                        alignItems="flex-end"
                        position="absolute"
                        top="0"
                        left="0"
                        backgroundColor={useColorModeValue('blackAlpha.400', 'blackAlpha.600')}
                        width="100%"
                        height="100%"
                        padding="8"
                        color="white">
                        <Avatar size="lg" src={user?.avatar} />
                        <Box marginLeft="6">
                            <Text as="h1" fontSize="xx-large" fontWeight="bold">{user?.first_name} {user?.last_name}</Text>
                            <Text as="p" fontSize="large" lineHeight="1.5">{user?.job_title}</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box
                    maxW="container-xl"
                    margin="auto"
                    padding="8"
                    backgroundColor={useColorModeValue('white', 'gray.700')}>
                    <Text as="p">{user?.description}</Text>
                    <Link href="/">
                        <Button colorScheme="whatsapp" as="a" marginTop="8">Back to all users</Button>
                    </Link>
                </Box>
            </Box>
        </Center>
    )
}

export default UserPage;
