import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { getThumbnailType } from "../../utils/projectUtils";
import { getThumbnailUrl, getWebsitePreviewUrl } from "../../utils/thumbnailUtils";

const ProjectThumbnail = ({ project, size = "medium", darkMode }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const thumbnailType = getThumbnailType(project);
  const isLive = thumbnailType === "live";
  
  // Get preview URL (custom thumbnail, website preview, or GitHub preview)
  const previewUrl = getThumbnailUrl(project);

  // Size classes
  const sizeClasses = {
    small: "w-[200px] h-[120px]",
    medium: "w-full h-[240px]",
    large: "w-full h-[480px] md:h-[600px]",
  };

  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  // For live websites, show LIVE embedded preview using iframe
  if (isLive && project.website) {
    // Calculate scale based on size for better responsive fit
    const scaleConfig = {
      small: { scale: 0.25, width: '400%', height: '400%' },
      medium: { scale: 0.33, width: '300%', height: '300%' },
      large: { scale: 0.5, width: '200%', height: '200%' },
    };
    
    const { scale, width, height } = scaleConfig[size] || scaleConfig.medium;
    
    return (
      <div className={`relative ${sizeClass} rounded-lg overflow-hidden shadow-lg group bg-zinc-900`}>
        {/* Loading placeholder */}
        {isLoading && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center z-10">
            <div className="flex flex-col items-center">
              <Globe size={40} className="text-zinc-600" />
              <p className="text-zinc-500 text-sm mt-2">Loading live preview...</p>
            </div>
          </div>
        )}
        
        {/* Live Website Preview - Embedded iframe with proper scaling */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src={project.website}
            title={`${project.title} live preview`}
            className={`absolute top-0 left-0 border-0 transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => {
              console.log(`✅ Live preview loaded for ${project.title}`);
              setIsLoading(false);
            }}
            onError={() => {
              console.error(`❌ Failed to load live preview for ${project.title}`);
              setIsLoading(false);
              setImageError(true);
            }}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            style={{
              pointerEvents: 'none',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              width: width,
              height: height,
            }}
          />
        </div>
        
        {/* Fallback if iframe fails to load */}
        {imageError && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center z-10">
            <div className="text-center p-4">
              <Globe size={60} className="text-white/70 mx-auto mb-3" />
              <p className="text-white/90 text-sm font-medium mb-1">{project.title}</p>
              <p className="text-white/70 text-xs mb-3">Live Website</p>
              <a 
                href={project.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-xs rounded-lg transition-colors backdrop-blur-sm"
              >
                Visit Site →
              </a>
            </div>
          </div>
        )}
        
        {/* Badge */}
        <div className="absolute top-2 right-2 z-20">
          <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
            Live
          </span>
        </div>

        {/* Hover overlay - Click to visit full site */}
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center z-30"
          style={{ pointerEvents: 'auto' }}
        >
          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            View Live Website →
          </span>
        </a>
      </div>
    );
  }

  // For GitHub repos or if preview URL exists, use image
  if (previewUrl && !imageError) {
    return (
      <div className={`relative ${sizeClass} rounded-lg overflow-hidden shadow-lg group bg-zinc-900`}>
        {/* Loading placeholder */}
        {isLoading && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center z-10">
            <div className="flex flex-col items-center">
              <Github size={40} className="text-zinc-600" />
              <p className="text-zinc-500 text-sm mt-2">Loading preview...</p>
            </div>
          </div>
        )}
        
        <img
          src={previewUrl}
          alt={`${project.title} ${isLive ? 'website' : 'repository'} preview`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
        />
        
        {/* Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              isLive
                ? "bg-green-600 text-white"
                : "bg-blue-600/90 text-white"
            }`}
          >
            {isLive ? "Live" : "Repository"}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            {isLive ? "View Live Website" : "View Repository"}
          </span>
        </motion.div>
      </div>
    );
  }

  // Fallback: GitHub-only project without preview (show styled placeholder)
  return (
    <div
      className={`relative ${sizeClass} rounded-lg overflow-hidden shadow-lg group ${
        darkMode
          ? "bg-gradient-to-br from-[#24292e] to-[#2d3339]"
          : "bg-gradient-to-br from-gray-700 to-gray-800"
      }`}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )`,
        }}
      />
      
      {/* GitHub icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Github
          size={size === "large" ? 120 : size === "medium" ? 80 : 60}
          className={darkMode ? "text-white/40" : "text-white/50"}
        />
      </div>

      {/* Code badge */}
      <div className="absolute top-2 right-2">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            darkMode
              ? "bg-blue-600/80 text-white"
              : "bg-blue-700 text-white"
          }`}
        >
          Code
        </span>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          View Code
        </span>
      </motion.div>
    </div>
  );
};

export default ProjectThumbnail;

