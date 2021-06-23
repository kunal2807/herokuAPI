import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
  const [files, setFiles] = useState()
  const [video, setVideo] = useState()

  async function uploadFile() {
    const formData = new FormData()
    console.log('upload', video)
    for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i])
    }
    formData.append('video', video[0])
    formData.append('name', 'abc')
    formData.append('age', '20')
    formData.append('gender', 'male')
    axios
      .post('https://mysterious-dawn-87140.herokuapp.com/api/faces', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjhmOTAzMmEwODA5NDcyZWNjZmZlNSIsImlhdCI6MTYyNDQ2NTk0MSwiZXhwIjoxNjI3MDU3OTQxfQ.hveteGjz1Q2D2vgs2KXcg6ef0yIxqYi-T09DOQr8_rg',
        },
      })
      .then((response) => {
        console.log(response.data)
      })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('here')
    let res = await uploadFile()
    console.log(res)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          id='file'
          multiple
          name='file'
          onChange={(e) => setFiles(e.target.files)}
        />
        <input
          type='file'
          id='video'
          multiple
          name='video'
          onChange={(e) => setVideo(e.target.files)}
        />
        <button type='submit' className='btn btn-info'>
          {' '}
          Upload File{' '}
        </button>
      </form>
    </div>
  )
}

export default App
