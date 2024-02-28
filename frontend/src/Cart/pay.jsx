import { useState } from "react";

function pay() {
    const [cardNumber,setCardNumber] = useState('');
    const [expiryDate,setExpiryDate] = useState('');
    const [cvv,setCvv] = useState('');

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        alert('Payment Submitted Successfully!');
    }
  return (
    <div>
        <div className="container mx-auto mt-8 p-8">
      <h2 className="text-3xl font-semibold mb-4">Payment</h2>
      <form onSubmit={handlePaymentSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="MM/YY"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="123"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit Payment
        </button>
      </form>
    </div>
    </div>
  )
}

export default pay;
