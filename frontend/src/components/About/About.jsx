import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '../../utils/portableTextComponents'

export default function About({ therapist }) {
  if (!therapist) return null

  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-wood-300 mb-8">About</h2>
        
        {therapist.bio && (
          <div className="prose prose-lg max-w-none mb-8 prose-headings:text-wood-300 prose-p:text-wood-300 prose-strong:text-wood-300 prose-a:text-primary-500 hover:prose-a:text-primary-600">
            <PortableText value={therapist.bio} components={portableTextComponents} />
          </div>
        )}

        {therapist.philosophy && (
          <div className="prose prose-lg max-w-none prose-headings:text-wood-300 prose-p:text-wood-300 prose-strong:text-wood-300 prose-a:text-primary-500 hover:prose-a:text-primary-600">
            <PortableText value={therapist.philosophy} components={portableTextComponents} />
          </div>
        )}
      </div>
    </section>
  )
}
