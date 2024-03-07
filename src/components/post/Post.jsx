import './post.css'
export default function Post({ value }) {

    return (
        <div className='col-4 py-3'>
            <div className='image-container rounded'><img className='rounded' src={value.image}></img></div>
            <div className='title-container pt-3 pb-1'>
                <div className='category'>{value.category}</div>
                <div className='title'>{value.title}</div>
            </div>
            <div>
                <div className='content'>{value.content}</div>
            </div>
            <div className='d-flex align-items-center pt-2'>
                <div className='author-img-container rounded-circle'><img src={value.authorImage} /></div>
                <div className='ps-2'>
                    <div className='author'>{value.author}</div>
                    <div className='role'>{value.authorRole}</div>
                </div>
            </div>
        </div>

    )
}
