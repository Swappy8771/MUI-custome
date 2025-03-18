// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          // 1️⃣ Primary Button Style
          props: { variant: 'primaryBtn' },
          style: {
            backgroundColor: '#1976d2',
            color: '#fff',
            padding: '10px 20px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          },
        },
        {
          // 2️⃣ Secondary Button Style
          props: { variant: 'secondaryBtn' },
          style: {
            backgroundColor: '#9c27b0',
            color: '#fff',
            padding: '10px 20px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: '#7b1fa2',
            },
          },
        },
        {
          // 3️⃣ Danger Button Style
          props: { variant: 'dangerBtn' },
          style: {
            backgroundColor: '#d32f2f',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#b71c1c',
            },
          },
        },
        {
          // 4️⃣ Outline Button Style
          props: { variant: 'outlineBtn' },
          style: {
            border: '2px solid #1976d2',
            color: '#1976d2',
            backgroundColor: 'transparent',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#e3f2fd',
              borderColor: '#1565c0',
              color: '#1565c0',
            },
          },
        },
        {
          // 5️⃣ Ghost Button Style
          props: { variant: 'ghostBtn' },
          style: {
            backgroundColor: 'transparent',
            color: '#616161',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          },
        },
      ],
    },
  },
});

export default theme;
