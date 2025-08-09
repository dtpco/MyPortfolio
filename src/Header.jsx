import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Slide,
    Fade,
    Container
} from '@mui/material';
// import home from './Home';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navItems = [
        { text: 'Home', path: '/' },
        { text: 'Projects', path: '/projects' },
        { text: 'Contact', path: '/contact' }
    ];

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Slide appear={false} direction="down" in={true}>
            <AppBar
                position="fixed"
                sx={{
                    width: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: '#00CED1',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                    }
                }}
            >
                <Container maxWidth={false} disableGutters>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                                whiteSpace: 'nowrap',
                                marginLeft: 0,
                                paddingLeft: { xs: '8px', sm: '16px' },
                                textAlign: 'left',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                fontFamily: "Fjalla One, sans-serif",
                            }}
                        >
                            MyPortfol.io
                        </Typography>

                        {isMobile ? (
                            <>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer}
                                    sx={{ color: 'white' }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    anchor="right"
                                    open={drawerOpen}
                                    onClose={toggleDrawer}
                                >
                                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
                                        <List>
                                            {navItems.map((item) => (
                                                <ListItem
                                                    button
                                                    component={Link}
                                                    to={item.path}
                                                    key={item.text}
                                                    sx={{
                                                        transition: 'background-color 0.3s',
                                                        '&:hover': { backgroundColor: 'rgba(0, 128, 128, 0.1)' }
                                                    }}
                                                >
                                                    <ListItemText primary={item.text} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Drawer>
                            </>
                        ) : (
                            <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                                {navItems.map((item) => (
                                    <Fade in={true} key={item.text} timeout={700}>
                                        <Button
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: 'white',
                                                mx: { xs: 0.5, sm: 1, md: 2 },
                                                position: 'relative',
                                                transition: 'all 0.3s',
                                                whiteSpace: 'nowrap',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    transform: 'translateY(-2px)'
                                                },
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: '50%',
                                                    width: '0%',
                                                    height: '2px',
                                                    backgroundColor: 'white',
                                                    transition: 'all 0.3s ease',
                                                    transform: 'translateX(-50%)'
                                                },
                                                '&:hover::after': {
                                                    width: '80%'
                                                }
                                            }}
                                        >
                                            {item.text}
                                        </Button>
                                    </Fade>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};

export default Header;