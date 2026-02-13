export default function PracticeDetails({ practice }) {
  if (!practice) return null

  const formatAddress = () => {
    if (!practice.location) return null
    const { address, city, state, zipCode } = practice.location
    const parts = [address, city, state, zipCode].filter(Boolean)
    return parts.join(', ')
  }

  const formatPaymentMethod = (method) => {
    const methodMap = {
      cash: 'Cash',
      check: 'Check',
      venmo: 'Venmo',
      zelle: 'Zelle',
      visa: 'Visa',
      mastercard: 'Mastercard',
      amex: 'American Express',
      discover: 'Discover',
      ivyPay: 'Ivy Pay',
    }
    return methodMap[method] || method
  }

  return (
    <section id="practice" className="py-16 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-wood-300 mb-8">My Practice at a Glance</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6 border border-neutral-200">
          <div>
            <h3 className="text-xl font-semibold text-wood-300 mb-2">Location & Availability</h3>
            {formatAddress() && (
              <p className="text-wood-300 mb-2">{formatAddress()}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {practice.inPerson && (
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  In-Person
                </span>
              )}
              {practice.telehealth && (
                <span className="bg-natural-green-100 text-natural-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Telehealth
                </span>
              )}
            </div>
          </div>

          {practice.fees && (
            <div>
              <h3 className="text-xl font-semibold text-wood-300 mb-2">Session Fees</h3>
              <ul className="space-y-2">
                {practice.fees.individual && (
                  <li className="text-wood-300">
                    Individual Sessions: <span className="font-semibold">${practice.fees.individual}</span>
                  </li>
                )}
                {practice.fees.couple && (
                  <li className="text-wood-300">
                    Couple Sessions: <span className="font-semibold">${practice.fees.couple}</span>
                  </li>
                )}
                {practice.fees.family && (
                  <li className="text-wood-300">
                    Family Sessions: <span className="font-semibold">${practice.fees.family}</span>
                  </li>
                )}
              </ul>
            </div>
          )}

          {practice.paymentMethods && practice.paymentMethods.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-wood-300 mb-2">Payment Methods</h3>
              <div className="flex flex-wrap gap-2">
                {practice.paymentMethods.map((method, index) => (
                  <span
                    key={index}
                    className="bg-neutral-100 text-wood-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {formatPaymentMethod(method)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {practice.insuranceInfo && (
            <div>
              <h3 className="text-xl font-semibold text-wood-300 mb-2">Insurance & Payment Options</h3>
              <p className="text-wood-300 whitespace-pre-line">{practice.insuranceInfo}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
