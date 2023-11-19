import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import { Avatar, Paper, IconButton } from "@mui/material";
import { PeopleOutlineOutlined, NotificationsNoneOutlined, SearchOutlined } from "@mui/icons-material";

const ICON_STYLES = { color: "#9CA3AF" };

function Header() {

    return (
        <Paper elevation={3}>
            <Grid container sx={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <Grid item>
                    <IconButton>
                        <SearchOutlined sx={ICON_STYLES} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton>
                        <PeopleOutlineOutlined sx={ICON_STYLES} />
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneOutlined sx={ICON_STYLES} />
                    </IconButton>
                    <IconButton>
                        <Avatar src= "https://www.istockphoto.com/es/foto/flor-de-magnolia-p%C3%BArpura-magnolia-f%C3%A9lix-aislado-sobre-fondo-blanco-con-camino-de-gm1370630918-440139050"/>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Header;