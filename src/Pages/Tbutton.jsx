import { Button, Box } from '@mui/material';

function Tbutton() {
  return (
    <Box sx={{ display: 'flex', gap: 2, p: 4 }}>
      <Button variant="primaryBtn">Primary</Button>
      <Button variant="secondaryBtn">Secondary</Button>
      <Button variant="dangerBtn">Danger</Button>
      <Button variant="outlineBtn">Outline</Button>
      <Button variant="ghostBtn">Ghost</Button>
    </Box>
  );
}

export default Tbutton;
