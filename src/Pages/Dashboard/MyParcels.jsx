import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaEye, FaTrash, FaMoneyBillWave } from 'react-icons/fa';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['my-parcels', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleView = (parcel) => {
    console.log('Viewing:', parcel);
  };

  const handleDelete = async (id) => {
    console.log(id)
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/parcels/${id}`);
        refetch();
        Swal.fire('Deleted!', 'Your parcel has been deleted.', 'success');
      } catch (err) {
        console.error('Delete failed:', err);
        Swal.fire('Error!', 'Failed to delete parcel.', 'error');
      }
    }
  };

  const handlePay = async (parcel) => {
    try {
      await axiosSecure.patch(`/parcels/payment/${parcel._id}`, { paymentStatus: 'Paid' });
      refetch();
      alert(`Payment completed for ${parcel.title}`);
    } catch (err) {
      console.error('Payment failed:', err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
        My Parcels: {parcels.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full text-sm md:text-base">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Title</th>
              <th className="hidden sm:table-cell">Created At (Formatted)</th>
              
              <th>Cost (৳)</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>
                <td className="capitalize">{parcel.type}</td>
                <td>{parcel.title}</td>
                
                <td className="hidden md:table-cell text-xs">{parcel.creation_date}</td>
                <td>{parcel.deliveryCost}</td>
                <td>
                  <span
                    className={`badge ${
                      parcel.paymentStatus === 'Paid' ? 'badge-success' : 'badge-error'
                    } text-white`}
                  >
                    {parcel.paymentStatus || 'Unpaid'}
                  </span>
                </td>
                <td>
                  <div className="flex flex-col md:flex-row lg:flex-row  gap-2 items-center">
                    <button
                      className="btn btn-xs btn-outline btn-info  "
                      onClick={() => handleView(parcel)}
                    >
                      <FaEye className="mr-1" /> View
                    </button>
                    <button
                      className="btn btn-xs btn-outline btn-error  "
                      onClick={() => handleDelete(parcel._id)}
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                    {parcel.paymentStatus !== 'Paid' && (
                      <button
                        className="btn btn-xs btn-outline btn-success"
                        onClick={() => handlePay(parcel)}
                      >
                        <FaMoneyBillWave className="mr-1" /> Pay
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {parcels.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center text-gray-400">
                  No parcels found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
