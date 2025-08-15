import React, { useState } from 'react'
import { User } from 'lucide-react'

const ProfileImage = ({ src, alt, className, ...props }) => {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  if (imageError) {
    return (
      <div className={`${className} bg-gradient-to-br from-cyberpunk-neon-purple to-cyberpunk-neon-blue flex items-center justify-center`}>
        <User className="w-24 h-24 text-white" />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-cyberpunk-card-bg animate-pulse flex items-center justify-center">
          <User className="w-24 h-24 text-cyberpunk-neon-purple" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  )
}

export default ProfileImage
