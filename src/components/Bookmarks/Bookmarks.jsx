

import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,markAsRead})=> {
  return (
    <div className='ml-4 bg-gray-100'>
        <div className=" container  mx-auto rounded ">

            <h2 className='text-left text-3xl'> Reading Time:{markAsRead}</h2>
          <h1 className="text-3xl text-center">Bookmarked Blogs:{bookmarks.length}</h1>
          {
           bookmarks.map((bookmark,idx)=> <Bookmark 
            key={idx}
            bookmark={bookmark}
            ></Bookmark>)
          }
        </div>
    </div>
  )
}

Bookmarks.propTypes = {
bookmarks: PropTypes.array,
markAsRead:PropTypes.number
}

export default Bookmarks


