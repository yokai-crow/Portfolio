import { Play, Pause, Headphones, Volume1, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import kabita from "../assets/kabita.mp3";

const tracks = [
  {
    title: "Kabita",
    type: "Rap",
    bpm: "140 BPM",
    genre: "Hiphop",
    audioSrc: kabita,
  },
  {
    title: "Listen on Youtube",
    type: "Rap",
    bpm: "140 BPM",
    genre: "Hiphop",
    audioSrc: kabita,
  },
];

const Music = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Play/pause handler
  const handlePlayPause = (index: number) => {
    if (currentTrackIndex !== index) {
      setCurrentTrackIndex(index);
      setCurrentTime(0);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = tracks[index].audioSrc;
      }
    }

    if (audioRef.current) {
      if (isPlaying && currentTrackIndex === index) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (currentTrackIndex !== index) return; 
    const progressBar = event.currentTarget;
    const clickPosition = event.nativeEvent.offsetX;
    const newTime = (clickPosition / progressBar.offsetWidth) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="w-5 h-5 text-muted" />;
    if (volume > 0 && volume <= 0.5) return <Volume1 className="w-5 h-5 text-muted" />;
    return <Volume2 className="w-5 h-5 text-muted" />;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.volume = volume;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, [volume]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Headphones className="w-10 h-10 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-secondary">Music</span>{" "}
              <span className="text-foreground">Collection</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">Original beats and rap tracks</p>
          {/* Volume Control */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {getVolumeIcon()}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-36 h-1 rounded-lg bg-muted accent-secondary focus:outline-none"
          />
        </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group p-5 bg-card border border-border rounded-lg hover:border-secondary transition-all hover:shadow-glow-purple"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors">
                    {track.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">{track.type}</span>
                    <span>{track.genre}</span>
                  </div>
                </div>
                <button
                  className="p-2 bg-secondary/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all group-hover:animate-glow-pulse"
                  onClick={() => handlePlayPause(index)}
                >
                  {isPlaying && currentTrackIndex === index ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>

              {/* Progress Bar */}
              <div
                className="flex-1 h-1 bg-muted rounded-full cursor-pointer relative"
                onClick={(e) => handleSeek(e, index)}
              >
                <div
                  className="h-full bg-gradient-purple transition-all duration-200"
                  style={{
                    width:
                      currentTrackIndex === index
                        ? `${(currentTime / duration) * 100}%`
                        : "0%",
                  }}
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                <span className="font-mono">{track.bpm}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Audio element (always present) */}
        <audio ref={audioRef} preload="metadata" />

        

        <div className="mt-12 text-center">
          <button
            className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:shadow-glow-purple hover:scale-105 transition-all"
            onClick={() => window.open("https://youtube.com/@nuranofficial", "_blank")}
          >
            Listen on YouTube
          </button>

        </div>
      </div>
    </section>
  );
};

export default Music;
