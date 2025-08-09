import React, { useState } from 'react';
import {
    Paper, TextField, Button, Typography, Box, Container,
    CircularProgress, Snackbar, Alert, Grow
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function MyContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
        }, 1500);
    }

    return (
        <Container maxWidth="md" className="contact-container">
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
                }}
            >
                Contact Me
            </Typography>

            <Box mb={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmailIcon sx={{ color: '#00B5B8', mr: 1 }} />
                    <Typography variant="body1" sx={{color:'#333333'}}>
                        donnalyntopacio20@gmail.com
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon sx={{ color: '#00B5B8', mr: 1 }} />
                    <Typography variant="body1" sx={{color:'#333333'}}>
                        +(639) 6119 05072
                    </Typography>
                </Box>
            </Box>

            <Grow in={true} timeout={1000}>
                <Paper elevation={2} sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0,82,204,0.12)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: '0 12px 28px rgba(0,82,204,0.18)',
                        transform: 'translateY(-4px)'
                    }
                }}>
                    <Box component="form" onSubmit={handleSubmit} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3
                    }}>
                        <TextField
                            fullWidth
                            label="Name"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur('name')}
                            error={touched.name && !formData.name}
                            helperText={touched.name && !formData.name ? "Name is required" : ""}
                            variant="outlined"
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#00CED1',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#00CED1',
                                    }
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#00CED1'
                                }
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={() => handleBlur('email')}
                            error={touched.email && !formData.email}
                            helperText={touched.email && !formData.email ? "Email is required" : ""}
                            variant="outlined"
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#00CED1',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#00CED1',
                                    }
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#00CED1'
                                }
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Message"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={() => handleBlur('message')}
                            error={touched.message && !formData.message}
                            helperText={touched.message && !formData.message ? "Message is required" : ""}
                            multiline
                            rows={5}
                            variant="outlined"
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#0052cc',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#0052cc',
                                    }
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#0052cc'
                                }
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            sx={{
                                alignSelf: 'flex-start',
                                mt: 1,
                                bgcolor: '#00B5B8',
                                color: 'white',
                                px: 4,
                                py: 1.2,
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: '#009193',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 4px 12px rgba(0,82,204,0.3)'
                                }
                            }}
                        >
                            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Send Message'}
                        </Button>
                    </Box>
                </Paper>
            </Grow>

            <Snackbar
                open={showSuccess}
                autoHideDuration={6000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default MyContact;