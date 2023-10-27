import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ViewDialog({ open, onClose }) {
    let viewData = useSelector(state => state.app.singleUser);
    console.log("view", viewData)
    return (
        <div >
            {/* <Button variant="outlined" onClick={() => props.open()}>
                Open dialog
            </Button> */}
            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <DialogTitle
                    xs={{ m: 0, p: 2 }}
                    id="customized-dialog-title">
                    View User id: {viewData.id}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>

                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid >
                                        <Item>
                                            <Typography gutterBottom variant="h5" component="div">
                                                FirstName
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Last Name
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Email
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Country
                                            </Typography>
                                        </Item>
                                    </Grid>
                                    <Grid >
                                        <Item>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {viewData.firstName}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {viewData.lastName}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {viewData.email}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {viewData.country}
                                            </Typography>
                                        </Item>
                                    </Grid >

                                </Grid >
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={onClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog >
        </div >
    );
}
