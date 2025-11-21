"use client"

export function DemoVideo() {

  return (
    <section className="w-full bg-black py-16 md:py-24 flex justify-center px-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">See iley in action</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Watch how professionals are using iley to transform their creative workflow
          </p>
        </div>

        <div className="relative w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
           <iframe
              src="https://player.mux.com/ZO02Xtfe01CMxLe8BYlihB8sMr4Tq9yjwt53zXRBlChpU?metadata-video-title=ILEY+TOOL+DEMO&video-title=ILEY+TOOL+DEMO&accent-color=%23f54a01&autoplay=true&loop=true&preload=auto&playsinline=true&default_resolution=1080&fit_mode=contain&default_speed=1.7"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; gyroscope; encrypted-media; picture-in-picture"
              allowFullScreen
              title="iley AI Image Editor Demo"
            />
        </div>
      </div>
    </section>
  )
}
