import React, {FC} from "react";
import { CharacterCard } from "./CharacterCard";
import {  Grid } from "@mui/material";
import { NotResults } from "./NotResults";
import {ICharacter} from "../types/Character";

interface ICharacterList {
    data:ICharacter[]
}

export const CharactersList:FC<ICharacterList> = ({ data }) => {
    if (data?.length === 0) {
        return <NotResults />;
    }

    return (
        <Grid
            container
    justifyContent="flex-start"
    sx={{ width: "1500px", margin: "0 auto", paddingTop: 5 }}
>
    {data?.map((item) => (
        <CharacterCard key={item.id} item={item} />
    ))}
    </Grid>
);
};