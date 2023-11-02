import { Grid, Typography } from "@mui/material"
import { StartOutlined } from "@mui/icons-material"

export default function NothingSelectedView() {
    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 3 }}
        >
            <Grid>
                <StartOutlined sx={{ fontSize: 100, color: "white" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography color={"white"} variant="h5">Selecciona o crea un entrada</Typography>
            </Grid>
        </Grid>
    )
}
