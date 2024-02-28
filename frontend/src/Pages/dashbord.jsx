

function dashbord() {
    const userData ={
        name: 'Bishal Das',
        email: 'join.deo@example.com',
        totalRentals: 15,
        upcomingRentals: 3,
        overdueRentals: 2,
    };

    return (
    <div className="pl-[280px] md-10">
      <div className="container mx-auto mt-8 p-8">
      <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Welcome, {userData.name}!</h3>
          <p className="text-gray-600">Email: {userData.email}</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Rentals</h3>
          <p className="text-4xl font-bold text-blue-500">{userData.totalRentals}</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Upcoming Rentals</h3>
          <p className="text-4xl font-bold text-green-500">{userData.upcomingRentals}</p>
        </div>
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Overdue Rentals</h3>
          <p className="text-4xl font-bold text-red-500">{userData.overdueRentals}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default dashbord;
