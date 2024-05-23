import { Button, VStack, useColorMode, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import users from "@/data/users";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <Box>
      <Text 
        fontSize="xxx-large" 
        fontWeight="extrabold"
        textAlign="center"
        margin-top="9">
        ACME Corporetion Employees
      </Text>
      <Grid
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gridGap="10"
        padding="10">
        {users.map((user) => (
          <GridItem key={user.id}>
            <UserCard {...user}></UserCard>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
