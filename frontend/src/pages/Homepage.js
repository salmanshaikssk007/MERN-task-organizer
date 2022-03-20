import React, { useState } from 'react'
import  {  Typography } from '@mui/material'
import { Card , CardContent} from '@mui/material';
import { Tabs , Tab } from '@mui/material';
import { Box } from '@mui/material';
import { TabPanel  , TabList } from '@mui/lab';
import { TabContext } from '@mui/lab';
import Styles from './Homepage.module.css'
import Login from '../components/Login';
import Signup from '../components/Signup';

const Homepage = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <div className={Styles.homepage}>
          <div className={Styles.div1}>
                
          </div>
          <div className={Styles.div2} >
          <Card sx={{ maxWidth: 500 , margin: '20px 0  0 60px ', borderRadius:'10px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 25 }} color="text.secondary" textAlign='center'>
                    Task - Organizer
                    </Typography>
                </CardContent>
            </Card>
          <Card sx={{ maxWidth: 500 , margin: ' 10px 0 0 60px' , borderRadius : '10px' }}>
                <CardContent>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth'>
                        <Tab label="Login" value="1" />
                        <Tab label="Sign up" value="2" />
                       
                        </TabList>
                    </Box>
                    <TabPanel value="1"> <Login/> </TabPanel>
                    <TabPanel value="2"> <Signup /> </TabPanel>
                </TabContext>
                </CardContent>
            </Card>
          </div>
      </div> 
    );
}

export default Homepage;
