import FAQSchema from './FAQSchema'
import { aiImageEditingFAQ } from '@/lib/faqData'

export default function FAQ( { show = true }: { show?: boolean } ) {
  return (
    <>
      <FAQSchema faqItems={aiImageEditingFAQ} />
      <section className="py-8 sm:py-12 md:py-24 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            {show && <h4 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 text-white">
              Frequently <span className="relative inline-block">
                <span className="relative z-10">Asked Questions</span>
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-[#a3e635]/70" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 4Q25 1 50 4T100 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h4>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto text-left">
            {aiImageEditingFAQ.map((item, index) => (
              <div key={index} className="p-4 sm:p-0">
                <h5 className="font-semibold mb-2 sm:mb-3 text-white text-base sm:text-lg">{item.question}</h5>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}