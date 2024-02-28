

function check() {
  return (
    <div className="pl-[280px] md-10">
        <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-semibold mb-4">Car Rental Checklist</h1>

      <form>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Personal Information:    Mahindra Scorpio N</h2>
          {/* ... Personal Information Checklist Items ... */}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Reservation Details:    For 2 days</h2>
          {/* ... Reservation Details Checklist Items ... */}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payment:    Rs 6000</h2>
          {/* ... Payment Checklist Items ... */}
        </section>

        {/* Repeat similar sections for Insurance, Vehicle Inspection, Rental Agreement, Emergency Preparedness, Return Process, Additional Equipment, and Customer Support */}

        
      </form>
    </div>
    </div>
  )
}

export default check;
