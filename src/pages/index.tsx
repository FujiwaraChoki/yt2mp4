// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import styles from '../style/Home.module.css'

import { useState } from 'react';

export default function Home() {
  const [youtubeURL, setYoutubeURL] = useState('');
  const [error, setError] = useState('');

  const setVideo = async () => {
    if (youtubeURL) {
      try {
        const response = await fetch('/api/download', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ youtubeURL })
        }).then(res => res.json()).then(data => data);

        console.log(response)

        if (response) {
          window.open(response.videoUrl, '_blank');
        } else {
          setError(response.message);
        }
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  return (
    <div className='container'>
      <Head>
        <title>Yt2Mp4 - Download YouTube videos as MP4 files</title>
        <meta name="description" content="Yt2Mp4 is a free online service that lets you download any YouTube video as an MP4 file. Just paste the video URL and click download." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        <h1 className='title'>
          Welcome to <a href="https://Yt2Mp4.com">Yt2Mp4</a>
        </h1>

        <p className={styles.paragraf__description}>
          Download YouTube videos as MP4 files using Yt2Mp4.
          Just paste the video URL of the video you want to convert and download.
        </p>

        {error && <p className={styles.paragraf__error}>{error}</p>}

        <div className='grid'>
          <div className='card'>
            <div>
              <h2>Download</h2>
              <p>Enter the YouTube URL for the video you want to download</p>
              <input onChange={(e) => {
                setYoutubeURL(e.target.value)
              }} value={youtubeURL} type="url" name="url" placeholder="Enter YouTube video URL" required />
              <button onClick={setVideo}>Download</button>
            </div>
          </div>
        </div>

        <div className='grid'>
          <div className='card'>
            <h2>How to use</h2>
            <p>1. Copy the URL of the YouTube video you want to download.</p>
            <p>2. Paste it in the input box below and click download.</p>
            <p>3. Wait for the conversion to finish and save the file.</p>
          </div>

          <div className='card'>
            <h2>Features</h2>
            <ul>
              <li>Fast and easy to use</li>
              <li>No registration or installation required</li>
              <li>Supports all YouTube formats and resolutions</li>
              <li>No watermarks or ads</li>
            </ul>
          </div>

          <div className='card'>
            <h2>About</h2>
            <p>Yt2Mp4 is a free online service that lets you download any YouTube video as an MP4 file. You can use it for personal or educational purposes only. Please respect the rights of the content owners and do not upload or distribute the downloaded files without their permission.</p>
          </div>
        </div>
      </main>

      <footer className='footer'>
        <a href="https://github.com/FujiwaraChoki/Yt2Mp4" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="GitHub Logo" width={80} height={80} />
          </span>
        </a>
      </footer>
    </div>
  )
}