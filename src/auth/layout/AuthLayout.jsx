import { Grid, Typography } from "@mui/material"

export default function AuthLayout({ children, title = "" }) {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
        >
            <Grid item
                className="box-shadow"
                xs={12}
                md={6}
                xl={4}
                sx={{ backgroundColor: "white", padding: 3, borderRadius: 2, width: { md: 450 } }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    {title}
                </Typography>
                {children}
            </Grid>
        </Grid>
    )
}
