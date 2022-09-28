import React, {FC} from "react";
import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import {ICharacter} from "../types/Character";

interface ICharacterCard{
    character:ICharacter
}

export const CharacterCard: FC<ICharacterCard> = ({character}) => {
    return (
        <Grid
            container
            justifyContent="center"
            sx={{
                backgroundColor: 'common.inputBgColor',
                borderWidth: 2,
                borderRadius: 7,
                border: `1px solid common.cardBorderColor`,
                display: "flex",
                flex: "0 0 30%",
                margin: "10px",
                padding: "10px",
            }}
        >
            <Image
                width={150}
                height={150}
                src={character.image}
                alt={character.name}
            />
            <Typography sx={{width: "100%", textAlign: "center"}}>
                {character.name}
            </Typography>
            <Grid container justifyContent="space-between">
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
            </Grid>
            <Grid container justifyContent="space-between">
                <p>Type: {character.type}</p>
                <p>Gender: {character.gender}</p>
            </Grid>
            <Grid container justifyContent="space-between">
                <p>Location: {character.location.name}</p>
            </Grid>
        </Grid>
    );
};