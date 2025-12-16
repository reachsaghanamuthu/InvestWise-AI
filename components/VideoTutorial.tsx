import React, { useState } from 'react';

interface VideoTutorialProps {
  type: 'mp4' | 'youtube';
  src: string;
  thumbnail?: string;
}

const VideoTutorial: React.FC<VideoTutorialProps> = ({ type, src, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getEmbedUrl = (url: string) => {
    // Return url as-is if it's already an embed link
    if (url.includes('/embed/')) return url;

    let videoId = '';
    
    // Match v=VIDEO_ID parameter (e.g. youtube.com/watch?v=...)
    const watchMatch = url.match(/[?&]v=([^&]+)/);
    
    // Match short URL format (e.g. youtu.be/...)
    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    
    if (watchMatch && watchMatch[1]) {
      videoId = watchMatch[1];
    } else if (shortMatch && shortMatch[1]) {
      videoId = shortMatch[1];
    } else {
      // If we can't parse it, return original (might work if browser allows or if it's a different format)
      return url;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getVideoSrc = () => {
    if (type === 'youtube') {
      const embedUrl = getEmbedUrl(src);
      const separator = embedUrl.includes('?') ? '&' : '?';
      return isPlaying ? `${embedUrl}${separator}autoplay=1` : embedUrl;
    }
    return src;
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-video relative group">
      {!isPlaying && thumbnail ? (
        <div className="relative w-full h-full cursor-pointer group" onClick={handlePlay}>
          <img
            src={thumbnail}
            alt="Tutorial Thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-all flex items-center justify-center backdrop-blur-[2px]">
            <div className="w-20 h-20 bg-white/20 hover:bg-emerald-500 hover:text-white backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 shadow-2xl transition-all duration-300 transform group-hover:scale-110">
              <svg className="w-10 h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-navy-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            AI Tutorial
          </div>
        </div>
      ) : (
        <>
          {type === 'mp4' ? (
            <video
              src={src}
              controls
              autoPlay={isPlaying}
              className="w-full h-full object-cover"
              poster="https://picsum.photos/1280/720?grayscale"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={getVideoSrc()}
              title="Investment Tutorial"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {!isPlaying && !thumbnail && (
            <div className="absolute top-4 left-4 bg-navy-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
              AI Tutorial
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VideoTutorial;