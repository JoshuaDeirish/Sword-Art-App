import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const WinnerScreen = ({winner, isLoggedIn}) => {
    const navigate = useNavigate();
    if(!isLoggedIn){
        navigate("/");
    }
    return (
        <>
        <Text fontSize={"5xl"} fontWeight="800">
        Winner of the battle is {winner}
        </Text>
        <Button mt="4" onClick={() => navigate("/characters")}>
            Go back to character screen
        </Button>
        </>
    );
};