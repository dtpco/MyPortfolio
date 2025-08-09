import React, { useState } from 'react'
import { Container, Paper, Box, Typography, Grow, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import l0 from '/lems0.png'
import l1 from '/lemss1.png'
import l2 from '/lems2.png'
import l3 from '/lems3.png'
import l4 from '/lems4.png'
import l5 from '/lems5.png'
import l6 from '/lems6.png'
import l7 from '/lems7.png'
import l8 from '/lems8.png'
import s0 from '/sse0.png'
import s1 from '/sse1.png'
import s2 from '/sse2.png'
import s3 from '/sse3.png'
import s4 from '/sse4.png'
import s5 from '/sse5.png'
import s6 from '/sse6.png'
import s7 from '/sse7.png'
import s8 from '/sse8.png'
import s9 from '/sse9.png'
import s10 from '/sse10.png'

function MyProjects() {
    // Modified to include multiple images per project
    const projects = [
        {
            id: 1,
            title: "Simple E-Commerce",
            description: "This is a simple e-commerce website, a Django Python project for our Information Management subject. IDE used PyCharm.",
            url: "https://github.com/pawekz/simpleecommerceV2",
            images: [s0,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10] // Add multiple images here
        },
        {
            id: 2,
            title: "LEMS",
            description: "This website is built for our capstone project in our school, it is a Laboratory Equipment Management System using Vite + ReactJS as frontend and Spring Boot Java as backend.",
            url: "https://github.com/MarkJanzenB/cit-lems-frontend/commits/testing",
            images: [l0,l1,l2,l3,l4,l5,l6,l7,l8] // Add multiple images here
        }
    ]

    // Keep track of current image for each project
    const [currentImage, setCurrentImage] = useState({});

    const nextImage = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        const totalImages = project.images.length;
        setCurrentImage(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % totalImages
        }));
    };

    const prevImage = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        const totalImages = project.images.length;
        setCurrentImage(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    return (
        <Container maxWidth="lg" sx={{  mb: 4, color: 'black' }}>
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                    color: '#00B5B8',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    paddingBottom: '8px',
                    display: 'inline-block',
                    textTransform: 'uppercase',
                    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
                    mt: '-10px',
                }}
            >
                My Projects
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                {projects.map(project => (
                    <Box key={project.id} sx={{ flex: 1, width: '33.33%' }}>
                        <Grow in={true} timeout={800}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '400px',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: 3,
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 , color:'#00B5B8'}}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    {project.description}
                                </Typography>

                                <Box sx={{
                                    flexGrow: 1,
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={project.images[currentImage[project.id] || 0]}
                                        alt={`${project.title} - ${currentImage[project.id] || 0}`}
                                        style={{
                                            width: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '4px'
                                        }}
                                    />

                                    {/* Navigation arrows */}
                                    <IconButton
                                        onClick={() => prevImage(project.id)}
                                        sx={{ position: 'absolute', left: 0, backgroundColor: 'rgba(255,255,255,0.5)' }}
                                        size="small"
                                    >
                                        <ArrowBackIcon />
                                    </IconButton>

                                    <IconButton
                                        onClick={() => nextImage(project.id)}
                                        sx={{ position: 'absolute', right: 0, backgroundColor: 'rgba(255,255,255,0.5)' }}
                                        size="small"
                                    >
                                        <ArrowForwardIcon />
                                    </IconButton>

                                    {/* Image indicator dots */}
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 1,
                                        p: 1
                                    }}>
                                        {project.images.map((_, idx) => (
                                            <Box
                                                key={idx}
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: (currentImage[project.id] || 0) === idx ? '#3f51b5' : '#bdbdbd'
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        backgroundColor: '#00B5B8',
                                        borderRadius: '4px',
                                        padding: '8px 16px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <Typography variant="body2" color="white">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: 'white', textDecoration: 'none' }}
                                        >
                                            View Project
                                        </a>
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grow>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default MyProjects