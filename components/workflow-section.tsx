import Image from "next/image"

export function WorkflowSection() {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32">
          <div className="flex-1 order-2 md:order-1">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
                <p className="text-sm text-zinc-500 mb-2">Prompt</p>
                <p className="text-black font-medium">Create a poster with a series of drink elements</p>
                <div className="flex gap-2 mt-4 text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-zinc-100" />
                  <div className="w-6 h-6 rounded-full bg-zinc-100" />
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">↑</div>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Just give the idea.</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              iley plans, explores, and creates like a real designer — calling the right tools, mapping out directions,
              and bringing your creative vision to life.
            </p>
            <span className="inline-block px-3 py-1 bg-[#a3e635] text-black text-xs font-bold uppercase tracking-wider rounded">
              Try Now
            </span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Co-create with iley — one canvas, shared intelligence.
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              On ChatCanvas, your ideas speak — and design sees, understands and responds. Mark what matters, leave a
              note, sketch a frame. iley reads your intent.
            </p>
            <span className="inline-block px-3 py-1 bg-[#a3e635] text-black text-xs font-bold uppercase tracking-wider rounded">
              Try Now
            </span>
          </div>
          <div className="flex-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/orange-drink-poster-design.jpg" alt="Poster Design" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative bg-zinc-900">
                <Image src="/purple-drink-poster.jpg" alt="Format 1" fill className="object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative bg-zinc-900 mt-12">
                <Image src="/drink-poster-mockup.jpg" alt="Format 2" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">All formats in one place.</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              You imagine it — iley brings it to life. Every format you need, ready in
              an instant.
            </p>
            <span className="inline-block px-3 py-1 bg-[#a3e635] text-black text-xs font-bold uppercase tracking-wider rounded">
              Try Now
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
