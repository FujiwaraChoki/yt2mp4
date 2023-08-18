import { NextApiRequest, NextApiResponse } from 'next';
import youtubedl from 'youtube-dl-exec';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { youtubeURL } = req.body;

    if (!youtubeURL) {
        return res.status(400).json({ error: 'YouTube URL is required' });
    }

    try {
        const output = await youtubedl(youtubeURL, {
            noWarnings: true,
            dumpJson: true,
        });

        const formats = output.formats;

        const selectedFormat = formats.find((format) => format.format_id === '625');

        if (!selectedFormat) {
            return res.status(500).json({ error: 'Selected format not found' });
        }

        const videoUrl = selectedFormat.manifest_url;

        console.log('videoUrl:', videoUrl)

        if (!videoUrl) {
            return res.status(500).json({ error: 'Failed to retrieve video URL' });
        }

        return res.status(200).json({ videoUrl: videoUrl });
    } catch (error) {
        console.error('Error downloading video:', error);
        return res.status(500).json({ error: 'Error downloading video' });
    }
}
