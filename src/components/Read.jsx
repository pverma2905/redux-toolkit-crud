import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSingleUser, showSingleUser, showUser } from '../feature/userDetailSlice';
// import { randomTraderName, randomEmail } from '@mui/x-data-grid-generator';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button, Container } from '@mui/material';
import ViewDialog from './ViewDialog';
import Update from './Update';
import DeleteDialog from './DeleteDialog';

export default function Read() {
    let rows = [];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUser())
    }, [])
    rows = useSelector(state => state.app.users);
    console.log("vvv", rows)


    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'firstName', headerName: 'FirstName', width: 150 },
        { field: 'lastName', headerName: 'LastName', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'dateOfBirth', headerName: 'DOB', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 150 },
        { field: 'country', headerName: 'Country', width: 150 },
        {
            field: 'actions', headerName: 'Actions', width: 400, renderCell: (params) => {

                return (
                    <>

                        <Button
                            // onClick={(e) => onButtonClick(e, params.row)}
                            variant="contained" color="success"
                            sx={{ mr: 4 }}
                            onClick={(e) => [handleOpen(params.row.id), dispatch(showSingleUser(params.row.id))]}
                        >
                            View
                        </Button>

                        <Button
                            onClick={(e) => handleUpdateOpen(params.row.id)}
                            variant="contained"
                            sx={{ mr: 4 }}
                        >
                            EDIT
                        </Button>
                        <Button
                            onClick={(e) => [handleDeleteOpen(params.row.id)]}
                            variant="contained" color="error"
                        >
                            Delete
                        </Button>


                    </>



                );
            }
        }
    ];

    const [filterModel, setFilterModel] = React.useState({
        items: [],
        quickFilterExcludeHiddenColumns: true,
        quickFilterValues: [''],
    });

    const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});


    // view modal start
    const [open, setOpen] = useState(false);
    const [ViewData, setViewData] = useState({});
    const [showViewModal, setShowViewModal] = useState(false);

    const handleOpen = (y) => {

        setOpen(true);
        //setViewData(y)
        setShowViewModal(true)
    };
    const handleClose = () => {
        console.log("????")
        setOpen(false);
        setShowViewModal(true)
    };
    // view modal end

    // update modal start
    const [updateOpen, setUpdateOpen] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleUpdateOpen = (id) => {
        console.log("1111", id)
        if (id) {
            setUpdateOpen(true);
            setShowUpdateModal(true)
            setId(id)
        }

    };
    const handleUpdateClose = () => {
        setUpdateOpen(false);
        setShowUpdateModal(false)
    };
    // update modal end

    // delete modal start
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [id, setId] = useState(null)
    const handleDeleteOpen = (y) => {
        console.log("delete popup1", y)
        setDeleteOpen(true);
        setShowDeleteModal(true)
        setId(y)
    };
    const handleDeleteClose = (e) => {
        console.log("delete popup2", e)
        if (e == "YES") {
            dispatch(deleteSingleUser(id))
            // dispatch(showUser())
            setDeleteOpen(false);
            setShowDeleteModal(false)
        } else {
            setDeleteOpen(false);
            setShowDeleteModal(false)
        }



    };
    // delete modal end



    return (
        <Container maxWidth="fixed" style={{ marginTop: '40px' }}>
            {showViewModal && <ViewDialog open={open} onClose={handleClose} />}

            {showUpdateModal && <Update onUpdateOpen={updateOpen} onUpdateClose={handleUpdateClose} id={id} />}
            {showDeleteModal && <DeleteDialog onDeleteOpen={deleteOpen} onDeleteClose={handleDeleteClose} />}
            <Box sx={{ width: 1 }}>
                <FormControlLabel
                    checked={columnVisibilityModel.id !== false}
                    onChange={(event) =>
                        setColumnVisibilityModel(() => ({ id: event.target.checked }))
                    }
                    control={<Switch color="primary" size="small" />}
                    label="Show ID column"
                />
                <FormControlLabel
                    checked={filterModel.quickFilterExcludeHiddenColumns}
                    onChange={(event) =>
                        setFilterModel((model) => ({
                            ...model,
                            quickFilterExcludeHiddenColumns: event.target.checked,
                        }))
                    }
                    control={<Switch color="primary" size="small" />}
                    label="Exclude hidden columns"
                />
                <Box sx={{ height: 500 }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        disableColumnFilter
                        disableDensitySelector
                        slots={{ toolbar: GridToolbar }}
                        filterModel={filterModel}
                        onFilterModelChange={(newModel) => setFilterModel(newModel)}
                        slotProps={{ toolbar: { showQuickFilter: true } }}
                        columnVisibilityModel={columnVisibilityModel}
                        onColumnVisibilityModelChange={(newModel) =>
                            setColumnVisibilityModel(newModel)
                        }
                    />
                </Box>
            </Box>



        </Container>



    );
}
