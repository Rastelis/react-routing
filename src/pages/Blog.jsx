
import HeaderBlog from '../components/header-blog/HeaderBlog'
import NewPost from '../components/new-post/NewPost'
import Posts from '../components/posts/Posts'
import { useState } from 'react'
import Footer from '../components/footer/Footer'


function App() {

  const [reload, setReload] = useState(false);

  return (
    <>
      <HeaderBlog />
      <Posts reload={reload} />
      <NewPost setReload={setReload} />
      <Footer />
    </>
  )
}

export default App
