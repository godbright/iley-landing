import { ArrowRight } from 'lucide-react'
import GoogleIcon from './ui/google-icon'

interface CTASectionProps {
  onGetStarted: () => void
  showWatchDemo?: boolean
}

export default function CTASection({ onGetStarted, showWatchDemo = false }: CTASectionProps) {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#a3e635]/10 border border-[#a3e635]/20 rounded-full px-4 py-2 mb-6">
            <span className="text-[#a3e635] text-xs font-medium uppercase tracking-wider">Start Creating Today</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your next creative vision is
            <br />
            <span className="relative inline-block">
              <span className="text-white relative z-10">
                one idea away
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#a3e635]/70" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 4Q25 1 50 4T100 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who've discovered the future of design. No credit card required to start.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://workspace.iley.app/auth"
              className="bg-[#a3e635] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#8cd32a] transition-all hover:scale-105 flex items-center gap-3 text-lg"
            >
              <GoogleIcon className="w-5 h-5" />
              Start Creating Now
              <ArrowRight className="w-5 h-5" />
            </a>
            
            {showWatchDemo && (
              <button 
                onClick={() => {
                  document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-base border border-zinc-700 px-6 py-3 rounded-full hover:border-zinc-600"
              >
                Watch Demo
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-3 justify-center text-zinc-400">
            <div className="w-2 h-2 bg-[#a3e635] rounded-full"></div>
            <span className="text-base">No setup required</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-zinc-400">
            <div className="w-2 h-2 bg-[#a3e635] rounded-full"></div>
            <span className="text-base">Results in seconds</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-zinc-400">
            <div className="w-2 h-2 bg-[#a3e635] rounded-full"></div>
            <span className="text-base">Cancel anytime</span>
          </div>
        </div>

     
      </div>
    </section>
  )
}