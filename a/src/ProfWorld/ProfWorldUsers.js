import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProfWorldUsers = () => {
  return (
    <Container disableGutters maxWidth={false}>
      {/* Container for the title */}
      <Grid container justifyContent="center" spacing={0} sx={{ py: 2 }}>
        <Grid item sm={12} xxs={12} md={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xxs: '30px', sm: '34px', md: '40px' },
              fontFamily: 'Playfair Display Bold',
              pb: '24px',
            }}
          >
            Users
          </Typography>
        </Grid>
      </Grid>

      {/* Grid layout for users */}
      <Grid
        container
        justifyContent="center"
        sx={{ py: 2, fontFamily: 'Calibre Regular', fontSize: '18px' }}
      >
        <Grid item sm={12} xs={12} md={12}>
          <Grid container spacing={4}>
            {/* First row: Two items, half width */}
            <Grid item lg={6} md={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  1. HR Managers and Recruiters
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  <b>Role:</b> Responsible for sourcing, screening, and managing candidates; maintaining employee records and documentation.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                  }}
                >
                  <b>Needs:</b> Efficient candidate tracking, automation of routine tasks, ability to interact with other systems and services.
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={6} md={6} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  2. Managers and Team Leaders
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  <b>Role:</b> Making strategic decisions, monitoring department and employee performance, analyzing productivity.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                  }}
                >
                  <b>Needs:</b> Access to up-to-date data on team performance, ability to monitor business status in real time.
                </Typography>
              </Box>
            </Grid>

            {/* Second row: Full-width item */}
            <Grid item lg={12} xs={12}>
              <Box sx={{ border: '1px solid #EFEFF8', padding: '32px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '20px', // Headings 20px
                    fontWeight: 'bold',
                    pb: '8px',
                  }}
                >
                  3. Company Employees
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                    pb: '8px',
                  }}
                >
                  <b>Role:</b> Perform work tasks, interact with other colleagues, manage their own requests for vacation, time off, etc.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Calibre Regular',
                    fontSize: '18px', // Text 18px
                  }}
                >
                  <b>Needs:</b> Ease of creating requests and interacting with HR, especially around absence, requesting time off, and accessing information about colleagues.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfWorldUsers;
