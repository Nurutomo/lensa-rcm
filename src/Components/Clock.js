import { useState, useEffect } from 'react'

function DigitalClock() {
    const [time, setTime] = useState(new Date())
      
      useEffect(() => {
        const intervalId = setInterval(() => {
          const date = new Date();
          setTime(date)
        }, 1000)
    
        return () => clearInterval(intervalId);
      }, [])

      return (<>{time.toTimeString()}</>)
}

export default DigitalClock;