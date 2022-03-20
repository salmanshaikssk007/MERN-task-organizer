import React from "react";
import Styles from './Roomcard.module.css'
import Card from '@mui/material/Card';
import image from './../assets/images/pic 5.jpg'
import Switch from '@mui/material/Switch';
import React, { useState } from 'react'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Roomcard = (props) =>{
    return(
        <>
            <Card className={Styles.roomContainer} sx={{ minWidth: 275 }}>
                <div className={Styles.adminImageContainer}>
                <img src={props.img} alt="" className={Styles.adminImage} />
                <h5>Admin</h5>
                </div>
                <h3>{props.title}</h3>
                <div className={Styles.groupTask}>
                 <h4>Group Task</h4>   
                <Switch {...label} label='Group Room'  />
                </div>
            </Card>
        </>
    );
}

export default Roomcard ;