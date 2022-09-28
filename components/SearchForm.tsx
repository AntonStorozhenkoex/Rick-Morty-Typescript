import React, {FC, useCallback, useEffect} from "react";
import {debounce, Grid, MenuItem, TextField, Select} from "@mui/material";
import {useFormikContext} from "formik";
import {genders, species, status} from "../constants";
import {IFormikValues} from "../types/FormikValues";

export const SearchForm: FC = () => {
    const {values, handleSubmit, handleChange} = useFormikContext<IFormikValues>();

    const onSubmit = useCallback(debounce(handleSubmit, 2000), []);

    useEffect(() => {
        onSubmit();
    }, [values]);

    return (
        <Grid container justifyContent="center" sx={{width: "100%"}}>
            <TextField
                name="type"
                placeholder="Character type"
                sx={{width: "50%", backgroundColor: 'common.inputBgColor'}}
                onChange={handleChange}
                value={values.type}
            />
            <Grid container justifyContent="center">
                <Grid
                    container
                    justifyContent="space-between"
                    sx={{width: "50%", paddingTop: 1}}
                >
                    <Select
                        name="status"
                        sx={{width: "145px", backgroundColor: 'common.inputBgColor'}}
                        onChange={handleChange}
                        value={values.status}
                    >
                        {status.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                    <Select
                        name="species"
                        sx={{width: "145px", backgroundColor: 'common.inputBgColor'}}
                        onChange={handleChange}
                        value={values.species}
                    >
                        {species.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                    <Select
                        name="gender"
                        sx={{width: "145px", backgroundColor: 'common.inputBgColor'}}
                        onChange={handleChange}
                        value={values.gender}
                    >
                        {genders.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
            </Grid>
        </Grid>
    );
};