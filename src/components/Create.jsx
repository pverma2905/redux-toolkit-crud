import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, InputLabel, MenuItem, Select } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../feature/userDetailSlice';

export default function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [country, setCountry] = useState('')


    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password, gender, country)
        let Obj = {
            id: Math.floor(Math.random() * (1000 - 10 + 1)) + 10, firstName, lastName, email, dateOfBirth, password, gender, country
        }
        dispatch(createUser(Obj));
        navigate("/")
    }



    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <h2 style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}>Register Form</h2>

                <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="First Name"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Last Name"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            fullWidth
                            required
                        />
                    </Stack>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="password"
                        variant='outlined'
                        color='secondary'
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        required
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="date"
                        variant='outlined'
                        color='secondary'
                        label="Date of Birth"
                        onChange={e => setDateOfBirth(e.target.value)}
                        value={dateOfBirth}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />


                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{ mb: 2 }}
                    >
                        <FormControlLabel value="female" onChange={e => setGender(e.target.value)} control={<Radio />} label="Female" />
                        <FormControlLabel value="male" onChange={e => setGender(e.target.value)} control={<Radio />} label="Male" />
                        <FormControlLabel value="other" onChange={e => setGender(e.target.value)} control={<Radio />} label="Other" />
                    </RadioGroup>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="Country"
                            onChange={e => setCountry(e.target.value)}
                            sx={{ mb: 4 }}
                        >
                            <MenuItem value={"india"}>India</MenuItem>
                            <MenuItem value={"usa"}>USA</MenuItem>
                            <MenuItem value={"japan"}>Japan</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="outlined" color="secondary" type="submit">Register</Button>
                </form>
                {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
            </Container>


        </React.Fragment>
    )
}
