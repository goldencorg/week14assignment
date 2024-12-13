import Sidebar from './Sidebar'
import Playlist from './Playlist'
import Lyrics from './Lyrics'

{/* imported and returned the three child components of App */}

export default function App(){
  return (
  <div className='d-flex flex-column vh-100'>
    <div className='d-flex flex-grow-1'>
      <Sidebar />
      <Playlist />
      <Lyrics />
    </div>
  </div>
)
}