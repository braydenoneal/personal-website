import React from 'react'

export default function Video({ videoId }: { videoId: string }) {
    return (
        <iframe className={'self-stretch'} src={`https://www.youtube.com/embed/${videoId}?controls=0`}
                allowFullScreen/>
    )
}
