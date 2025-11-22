"use client"

import { useState } from "react"
import { Upload } from "lucide-react"

interface PromptInputProps {
  onTransform?: () => void
  onUploadClick?: () => void
}

export function PromptInput({ onTransform, onUploadClick }: PromptInputProps) {
  const [promptText, setPromptText] = useState("")
  const [showUploadOptions, setShowUploadOptions] = useState(false)

  const handleTransform = () => {
    if (onTransform && promptText.trim()) {
      onTransform()
    } else {
      // Default behavior if no handler provided
      alert(`Transforming with prompt: "${promptText}"`)
    }
  }

  const handleUploadClick = () => {
    if (onUploadClick) {
      onUploadClick()
    } else {
      // Default behavior if no handler provided
      alert("Upload functionality would be implemented here")
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto mb-12 px-2 sm:px-4">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl sm:rounded-3xl focus-within:border-[#a3e635] focus-within:ring-2 focus-within:ring-[#a3e635]/20 transition-all shadow-2xl relative backdrop-blur-sm">
        <div className="relative">
          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Describe your creative vision... Try: &ldquo;create anime style portrait&rdquo; or &ldquo;vintage film photography effect&rdquo;"
            className="w-full p-4 sm:p-6 md:p-8 text-base sm:text-lg md:text-xl placeholder-zinc-500 resize-none focus:outline-none bg-transparent leading-relaxed text-white font-light"
            style={{ 
              height: '110px',
              minHeight: '100px'
            }}
            aria-label="Describe your image transformation prompt"
            role="textbox"
          />
          
          {/* Action buttons */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 flex items-center gap-3">
            <button 
              onClick={handleTransform}
              disabled={!promptText.trim()}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#a3e635] text-black rounded-full hover:bg-[#8cd32a] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-medium shadow-lg"
              aria-label="Start free AI image transformation"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Upload Options */}
        {showUploadOptions && (
          <div className="absolute bottom-20 right-4 bg-zinc-800 border border-zinc-600 rounded-xl shadow-lg p-2 w-30 z-10">
            <button 
              onClick={() => {
                handleUploadClick()
                setShowUploadOptions(false)
              }}
              className="w-full flex items-center gap-3 p-3 hover:bg-zinc-700 rounded-lg transition-colors text-left"
            >
              <Upload className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-white font-light">Upload image</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}