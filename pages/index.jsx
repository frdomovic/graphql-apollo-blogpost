import Head from 'next/head'
import Image from 'next/image'
import BlogPosts from '../components/BlogPosts'
import SubmitBlogPostForm from '../components/SubmitBlogPostForm'
import {
  ADD_BLOGPOST,
  DELETE_BLOGPOST,
  EDIT_BLOGPOST
} from '../graphql/queries'
import { useQuery, useMutation } from '@apollo/client'
import EditModal from '../components/EditModal'
import { useState } from 'react'

export default function Home () {
  const [editId, setEditId] = useState('')
  const onClose = () => {
    setEditId('')
  }
  const openModal = id => {
    setEditId(id)
  }
  const [addBlogPost] = useMutation(ADD_BLOGPOST, {
    onCompleted: data => {
      window.location.reload()
    }
  })
  const [deleteBlogPost] = useMutation(DELETE_BLOGPOST, {
    onCompleted: data => {
      window.location.reload()
    }
  })
  const [editBlogPost] = useMutation(EDIT_BLOGPOST, {
    onCompleted: data => {
      window.location.reload()
    }
  })
  const onSaveEdit = e => {
    e.preventDefault()
    editBlogPost({ variables: { id: editId, text: e.target.text.value } })
  }

  const onDelete = id => deleteBlogPost({ variables: { id } })

  const onSubmit = e => {
    e.preventDefault()
    console.log(e.target.text.value)
    addBlogPost({ variables: { text: e.target.text.value } })
  }
  return (
    <div className='h-full s-full bg-black flex flex-col justify-center items-center'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <EditModal isOpen={!!editId} onClose={onClose} onSubmit={onSaveEdit} />
      <SubmitBlogPostForm onSubmit={onSubmit} />
      <div className='mt-10 pb-20'>
        <BlogPosts onDelete={onDelete} openModal={openModal} />
      </div>
    </div>
  )
}
