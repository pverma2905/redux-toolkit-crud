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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function DeleteDialog({ onDeleteOpen, onDeleteClose }) {
    return (
        <div >
            {/* <Button variant="outlined" onClick={() => props.open()}>
                Open dialog
            </Button> */}
            <BootstrapDialog
                onClose={onDeleteClose}
                aria-labelledby="customized-dialog-title"
                open={onDeleteOpen}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Delete User
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onDeleteClose}
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
                    {/* <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography> */}
                    <h2>Are You Sure Want To Delete ?</h2>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={(e) => onDeleteClose(e.target.innerText)}>
                        No
                    </Button>
                    <Button autoFocus onClick={(e) => onDeleteClose(e.target.innerText)}>
                        yes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
