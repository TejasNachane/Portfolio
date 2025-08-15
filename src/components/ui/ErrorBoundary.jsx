import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cyberpunk-dark-bg flex items-center justify-center p-4">
          <div className="text-center max-w-md mx-auto">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-cyberpunk-neon-pink mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-300 mb-6">
              Don't worry, even the best gamers encounter bugs. Let's respawn and try again!
            </p>
            <button
              onClick={() => window.location.reload()}
              className="cyberpunk-button"
            >
              Respawn
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
