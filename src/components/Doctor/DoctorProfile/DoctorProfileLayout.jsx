import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import DoctorProfile from "./Profile";

export default function DoctorProfileLayout() {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid

                    xs={7}
                    md={7}
                    lg={7}
                    item
                    sx={{
                        Width: "100%",
                        display: "static",
                        // flexDirection: "row",
                        height: "auto",
                        alignItems: "center",
                        boxSizing: " border-box"
                    }}
                >
                    <Paper>
                        <DoctorProfile />
                    </Paper>
                </Grid>

                <Grid
                    item
                    
                    xs={4.5}
                    md={4.5}
                    lg={4.5}
                    sx={{
                        mr: "10px",
                        Width: "100%",
                        display: "static",
                        flexDirection: "row",
                        height: "auto",
                        alignItems: "center",
                        boxSizing: " border-box"
                    }}
                >
                    <Paper>
                        <DoctorProfile />
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
}