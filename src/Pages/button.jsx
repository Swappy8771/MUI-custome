import React from 'react';
import { Button, Box } from '@mui/material';
import { alpha } from '@mui/system';


function Dummy() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                bgcolor: '#f0f4f8',
            }}
        >
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary"
                    sx={{
                        '&:hover': {
                            backgroundColor: '#ffebee', 
                            color: '#d32f2f',            
                            borderColor: '#d32f2f',      
                        },
                    }}
                >
                    Button One
                </Button>
                <Button variant="text" color="primary"
                    sx={{
                        '&:hover': {
                            backgroundColor: '#1565c0',
                            color: 'white',
                            borderColor: "#000" // darker blue on hover
                        },
                    }}>
                    Cancel
                </Button>
                <Button variant="outlined" color="secondary"

                // for transparent effect on base opacity
                sx={{
                    '&:hover': {
                      backgroundColor: alpha('#1976d2', 0.1), // 10% opacity
                    },
                  }}>
                    Button Two
                </Button>
            </Box>
        </Box>
    );
}

export default Dummy;
