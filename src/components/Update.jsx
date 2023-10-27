
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Stack, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateUser } from '../feature/userDetailSlice';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function Update({ onUpdateOpen, onUpdateClose, id }) {
    const [updateData, setUpdateData] = useState({});
    const [updateData1, setUpdateData1] = useState([]);
    const { users, loading } = useSelector(state => state.app);
    console.log("eeee", users, id)
    useEffect(() => {
        // if (id) {
        console.log("mmmmmmmmmmmmm", id)
        const singleUser = users.filter((ele) => ele.id === id);
        console.log("zzzz", singleUser)
        setUpdateData(singleUser[0])
        setUpdateData1(singleUser)
        // }
    }, [])
    console.log("pranav", updateData)
    console.log("pranav", updateData1)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }

    function handleSubmit(event) {
        console.log("before", updateData)
        event.preventDefault();
        dispatch(updateUser(updateData));
        onUpdateClose();
        navigate("/")
    }

    if (updateData1 && updateData1.length === 1 && updateData && Object.keys(updateData.length > 0) && updateData != undefined) {
        console.log(updateData, updateData.length)
        return (
            <div>
                {/* <Button variant="outlined" onClick={() => props.open()}>
                Open dialog
            </Button> */}
                <BootstrapDialog
                    onClose={onUpdateClose}
                    aria-labelledby="customized-dialog-title"
                    open={onUpdateOpen}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Update User
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={onUpdateClose}
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


                        <React.Fragment>
                            <Container maxWidth="sm">
                                <h2 style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}>Update Form</h2>

                                <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                                        <TextField
                                            type="text"
                                            variant='outlined'
                                            name="firstName"
                                            color='secondary'
                                            label="First Name"
                                            onChange={newData}
                                            value={updateData && updateData.firstName}
                                            fullWidth
                                            required
                                        />
                                        <TextField
                                            type="text"
                                            variant='outlined'
                                            color='secondary'
                                            name="lastName"
                                            label="Last Name"
                                            onChange={newData}
                                            value={updateData && updateData.lastName}
                                            fullWidth
                                            required
                                        />
                                    </Stack>
                                    <TextField
                                        type="email"
                                        variant='outlined'
                                        color='secondary'
                                        label="Email"
                                        name="email"
                                        onChange={newData}
                                        value={updateData && updateData.email}
                                        fullWidth
                                        required
                                        sx={{ mb: 4 }}
                                    />
                                    <TextField
                                        type="password"
                                        variant='outlined'
                                        color='secondary'
                                        name="password"
                                        label="Password"
                                        onChange={newData}
                                        value={updateData && updateData.password}
                                        required
                                        fullWidth
                                        sx={{ mb: 4 }}
                                    />
                                    <TextField
                                        type="date"
                                        variant='outlined'
                                        color='secondary'
                                        name="dateOfBirth"
                                        label="Date of Birth"
                                        onChange={newData}
                                        value={updateData && updateData.dateOfBirth}
                                        fullWidth
                                        required
                                        sx={{ mb: 2 }}
                                    />


                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender"
                                        sx={{ mb: 2 }}
                                        checked={updateData && updateData.gender ? true : false}
                                        value={updateData.gender == undefined ? updateData1[0].gender : updateData.gender}

                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" onChange={newData} />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={newData} />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" onChange={newData} />
                                    </RadioGroup>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={updateData.country == undefined ? updateData1[0].country : updateData.country}
                                            label="Country"
                                            onChange={newData}
                                            name="country"
                                            sx={{ mb: 4 }}
                                        >
                                            <MenuItem value={"india"}>India</MenuItem>
                                            <MenuItem value={"usa"}>USA</MenuItem>
                                            <MenuItem value={"japan"}>Japan</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <Button variant="outlined" color="secondary" type="submit">Update</Button>
                                </form>
                                {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
                            </Container>


                        </React.Fragment>

                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={onUpdateClose}>
                            Save changes
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        );
    }
    else {
        return "No Data"
    }

}
