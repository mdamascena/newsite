import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs() {
  
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {setOpen(true);};
    
    const handleClose = () => {setOpen(false);};

    return (

        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Modal title
            </DialogTitle>
                
            <IconButton aria-label="close" onClick={handleClose} sx={{position: 'absolute',right: 8, top: 8, color: (theme) => theme.palette.grey[500],}}>
                X
            </IconButton>
            
            <DialogContent dividers>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </DialogContent>
            
            <DialogActions>
                y66y6y6y6y6y6
            </DialogActions>

        </BootstrapDialog>
    );
}
