import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const EditModal = ({ onSubmit, onClose, isOpen }) => {
  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Edit Blog Post</DialogTitle>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <TextField autoFocus margin='dense' fullWidth name='text' />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type='submit'>Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default EditModal
