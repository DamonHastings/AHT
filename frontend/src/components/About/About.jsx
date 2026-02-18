import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '../../utils/portableTextComponents'

export default function About({ therapist }) {
  if (!therapist) return null

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 
          className="font-heading text-4xl md:text-5xl font-semibold mb-8"
          style={{ color: '#3F1006' }}
        >
          A Safe Space for Growth and Healing
        </h2>
        
        {therapist.bio && (
          <div 
            className="font-body prose prose-lg max-w-none mb-8 prose-headings:font-heading prose-p:font-body prose-p:leading-relaxed"
            style={{ color: '#43595D' }}
          >
            <PortableText value={therapist.bio} components={portableTextComponents} />
          </div>
        )}

        {therapist.philosophy && (
          <div 
            className="font-body prose prose-lg max-w-none prose-headings:font-heading prose-p:font-body prose-p:leading-relaxed"
            style={{ color: '#43595D' }}
          >
            <PortableText value={therapist.philosophy} components={portableTextComponents} />
          </div>
        )}
      </div>
    </section>
  )
}
