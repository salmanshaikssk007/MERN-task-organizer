import React from 'react';
import Styles from './TaskCard.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TaskCard(props) {
    return (
        <>
            <Card className={Styles.cardContainer}  sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.text}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}


export default TaskCard
