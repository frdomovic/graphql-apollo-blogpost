import { Button, TextField } from '@mui/material'

const SubmitBlogPostForm = ({ onSubmit }) => {
  return (
    <>
      <h1 className='text-white mt-10'>Add new element</h1>
      <form
        onSubmit={onSubmit}
        className='mt-2 flex flex-col justify-center items-center'
      >
        <TextField
          name='text'
          className='bg-white rounded-3xl w-full color-blue-200 rows-3'
        />
        <button
          type='submit'
          className='mt-2 w-32 bg-white rounded-3xl text-bold'
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default SubmitBlogPostForm
