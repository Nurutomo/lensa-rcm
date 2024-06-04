// Suggested code may be subject to a license. Learn more: ~LicenseLog:687648754.
export async function getLatestStreamFromChannel(channelId) {
    const apiKey = 'AIzaSyApc49htQ-0v8sA4oevf-HRoaPFSbhlckg' // Replace with your actual API key
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&type=video&eventType=completed&maxResults=1`

    try {
        const response = await fetch(url)
        const data = await response.json()

        return data;
    } catch (err) {
        console.error('Error fetching videos:', err)
        return null
    }
}

// Example usage:
// getLatestStreamFromChannel('UCuJro8DdFpqVVn-CphNnIXw')
