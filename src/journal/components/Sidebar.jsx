import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import SidebarItem from "./SidebarItem"

export default function Sidebar({ drawerWidth }) {

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)


    return (
        <Box
            component={"nav"}
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 },
                [`& .MuiDrawer-paper`]: { boxSizing: `border-box`, width: drawerWidth },
            }}
        >
            <Drawer
                variant="permanent"
                sx={{
                    [`& .MuiDrawer-paper`]: { boxSizing: `border-box`, width: drawerWidth },
                    display: { xs: `none`, sm: `block` },
                }}
                open
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component={"div"}>
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        notes.map(note => (
                            <SidebarItem 
                                key={note.id}
                                note={note}
                            />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
