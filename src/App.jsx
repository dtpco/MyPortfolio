import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Paper, Box, Typography, Fade, Grow } from '@mui/material'
import Dee from '/Dee.png'
import resume from '/resume.gif'
import './App.css'
import Header from './Header'
import MyProjects from './MyProjects'
import Contact from './MyContact'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
    return (
        <Router>
            <Header />
            <Box sx={{ paddingTop: '64px', paddingBottom: '20px' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<MyProjects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Box>
        </Router>
    )
}

function HomePage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);


    useEffect(() => {
        if (!loaded) return;

        gsap.from(".animate-text", {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".profile-image",
                start: "top 80%"
            }
        });
    }, [loaded]);

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        <Grow in={loaded} timeout={1500}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    mb: 4,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    alignItems: 'center',
                                    gap: 4,
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 3,
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {/* Left side - Photo and Name */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: { xs: '100%', md: '40%' },
                                        textAlign: 'center',
                                        padding: 2,
                                        borderRight: { md: '1px solid #e0e0e0' },
                                    }}
                                >
                                    <img
                                        className="profile-image"
                                        src={Dee}
                                        alt="Profile"
                                        style={{
                                            width: 200,
                                            height: 200,
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            marginBottom: '16px',
                                            transition: 'transform 0.3s ease-in-out',
                                            border: '2px solid #ddd',
                                        }}
                                    />
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        fontWeight="bold"
                                        className="animate-text"
                                        sx={{ color: '#333' }}
                                    >
                                        Donnalyn Topacio
                                    </Typography>
                                </Box>

                                {/* Right side - Bio */}
                                <Box
                                    sx={{
                                        width: { xs: '100%', md: '60%' },
                                        padding: 2,
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        className="animate-text"
                                        sx={{ lineHeight: 1.6, color: '#555' }}
                                    >
                                        <img src={resume} alt="Resume"  style={{ maxWidth: '80px'}}/><br/>
                                        A BS Information Technology student at the Cebu Institute of Technology - University, with a passion for web development and design.
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grow>
                </Container>
            <Typography variant="caption"
                        sx={{
                            fontSize: '0.6rem',
                            display: 'block',
                            mt: 1,
                            mb: 2,
                            textAlign: 'center',
                            color:"#f8f9fa"
                        }}>
                <a
                    href="https://www.flaticon.com/free-animated-icons/curriculum-vitae"
                    title="curriculum vitae animated icons"> Curriculum vitae animated icons created by Freepik - Flaticon</a>

            </Typography>
            <Box
                sx={{
                    height: '50px',
                    mt: 'auto',
                    // backgroundColor: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTop: '1px solid #ddd'
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    © 2025 dtpco. All rights reserved.
                </Typography>
            </Box>
        </>
    )
}

export default App