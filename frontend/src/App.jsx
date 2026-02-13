import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import PracticeDetails from './components/PracticeDetails/PracticeDetails'
import Qualifications from './components/Qualifications/Qualifications'
import Specialties from './components/Specialties/Specialties'
import TreatmentApproach from './components/TreatmentApproach/TreatmentApproach'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useTherapistData } from './hooks/useTherapistData'
import { usePracticeData } from './hooks/usePracticeData'
import { useSpecialties } from './hooks/useSpecialties'
import { useTreatmentApproaches } from './hooks/useTreatmentApproaches'

function App() {
  const { therapist } = useTherapistData()
  const { practice } = usePracticeData()
  const { specialties } = useSpecialties()
  const { treatmentApproaches } = useTreatmentApproaches()

  return (
    <div className="min-h-screen bg-neutral-50 text-wood-300">
      <Header therapist={therapist} />
      <Hero therapist={therapist} practice={practice} />
      <About therapist={therapist} />
      <PracticeDetails practice={practice} />
      <Qualifications />
      <Specialties specialties={specialties} />
      <TreatmentApproach treatmentApproaches={treatmentApproaches} />
      <Contact therapist={therapist} practice={practice} />
      <Footer />
    </div>
  )
}

export default App
