import { User } from "@/data/users";
import { Avatar, Box, Text,Center, VStack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const UserCard = (props : User) => {
    return (
        <Link href={`/user/${props.username}`}>
            <VStack
                spacing="4"
                borderRadius="md"
                boxShadow="xl"
                padding="5"
                backgroundColor={useColorModeValue('gray.50', 'gray.700')}>
                <Center>
                    <Avatar size="lg" src={props.avatar}></Avatar>
                </Center>
                <Center>
                    <Box textAlign="center">
                        <Text fontWeight="bold" fontSize="xl">{props.first_name} {props.last_name}</Text>
                        <Text fontSize="xs">{props.job_title}</Text>
                    </Box>
                </Center>
            </VStack>
        </Link>
    );
}

export default UserCard;