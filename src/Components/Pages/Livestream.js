import { useState, useEffect } from 'react'
import { getLatestStreamFromChannel } from '../../YouTube'

function Livestream() {
  const [result, setResult] = useState({ error: { message: 'Loading...' } })
  useEffect(() => {
    function getResult() {
      getLatestStreamFromChannel('UCuJro8DdFpqVVn-CphNnIXw').then(result => {
        console.log(result)
        setResult(result)
      }).catch(err => {
        console.error(err)
        setResult(result)
      })
    }
    getResult()
    const intervalID = setInterval(getResult, 60 * 60 * 1000)
    return () => {
      clearInterval(intervalID)
    }
  }, [])
  return (
    <>
      {result ? (result.error ? <p dangerouslySetInnerHTML={{ __html: result.error.message }} /> :
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe
            title='youtube-frame-src'
            width='100%'
            height='100%'
            className='embed-responsive-item'
            src={'https://www.youtube.com/embed/' + result.items[0].id.videoId}
          ></iframe>
        </div>) : 'Loading...'}
    </>
  )
}

export default Livestream
