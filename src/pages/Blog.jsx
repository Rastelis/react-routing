
import HeaderBlog from '../components/header-blog/HeaderBlog'
import NewPost from '../components/new-post/NewPost'
import Posts from '../components/posts/Posts'
import { useState } from 'react'


function App() {

  const [reload, setReload] = useState(false);

  return (
    <>
      <HeaderBlog />
      <Posts reload={reload}/>
      <NewPost setReload={setReload} />
    </>
  )
}

export default App
