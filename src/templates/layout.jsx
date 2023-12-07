import Grid from '@mui/material/Unstable_Grid2';
import {Box, CssBaseline } from '@mui/material';
import Sales from '../organisms/sales';
//import { Traffic } from '@mui/icons-material';
//import KPI from '../organisms/kpi';

function Layout({children}) {
    const [header, menu, KPI1, KPI2, KPI3, KPI4, Traffic, Sales ] = children

    return (
        <Box style= {{display: "flex", height: "100vh" }}>
            <CssBaseline />
            <Grid container sx={{flexGrow: 1}}>
                <Grid item flexBasis={220}>{menu}</Grid>
                <Grid item flex={1}>
                    <Grid xs={12}>
                        {header}
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid xs={3}>{KPI1}</Grid>
                        <Grid xs={3}>{KPI2}</Grid>
                        <Grid xs={3}>{KPI3}</Grid>
                        <Grid xs={3}>{KPI4}</Grid>
                    </Grid>
                    <Grid container xs={12}>
                         <Grid xs={4}>{Traffic}</Grid>
                         <Grid xs={8}>{Sales}</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Layout;  