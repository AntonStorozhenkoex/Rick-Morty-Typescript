import React, {FC} from "react";
import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import {ICharacter} from "../types/Character";

export const CharacterCard: FC<ICharacter> = ({item}) => {
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
                src={item.image}
                alt={item.name}
            />
            <Typography sx={{width: "100%", textAlign: "center"}}>
                {item.name}
            </Typography>
            <Grid container justifyContent="space-between">
                <p>Status: {item.status}</p>
                <p>Species: {item.species}</p>
            </Grid>
            <Grid container justifyContent="space-between">
                <p>Type: {item.type}</p>
                <p>Gender: {item.gender}</p>
            </Grid>
            <Grid container justifyContent="space-between">
                <p>Location: {item.location.name}</p>
            </Grid>
        </Grid>
    );
};