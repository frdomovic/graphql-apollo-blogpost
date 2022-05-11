import { useQuery } from '@apollo/client'
import { GET_BLOGPOST } from '../graphql/queries'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const BlogPost = ({ text, id, onDelete, openModal }) => {
  return (
    <Card className='w-96 mb-2'>
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => openModal(id)} size='small'>
          Edit
        </Button>
        <Button onClick={() => onDelete(id)} size='small'>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

const BlogPosts = ({ onDelete, openModal }) => {
  const { loading, error, data } = useQuery(GET_BLOGPOST)
  if (loading) {
    return 'loading'
  }
  if (error) {
    return 'error'
  }
  return data.blogPosts.map(blogPostData => {
    return (
      <BlogPost
        openModal={openModal}
        onDelete={onDelete}
        {...blogPostData}
        key={blogPostData.id}
      />
    )
  })
}

export default BlogPosts
