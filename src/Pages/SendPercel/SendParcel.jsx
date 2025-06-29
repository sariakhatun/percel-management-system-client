import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcel = () => {
  const navigate = useNavigate();
  let { user } = useAuth();
  let warehouses = useLoaderData();
  let axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedType, setSelectedType] = useState("document");
  const [senderRegion, setSenderRegion] = useState("");
  const [receiverRegion, setReceiverRegion] = useState("");

  const regions = [...new Set(warehouses.map((w) => w.region))];

  const getDistrictsByRegion = (region) => {
    return [
      ...new Set(
        warehouses.filter((w) => w.region === region).map((w) => w.district)
      ),
    ].sort();
  };

  const senderDistricts = getDistrictsByRegion(senderRegion);
  const receiverDistricts = getDistrictsByRegion(receiverRegion);

  const generateTrackingId = () => {
    return "TRK" + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const onSubmit = (data) => {
    const weight = parseFloat(data.weight || 0);
    const sameDistrict = data.senderDistrict === data.receiverDistrict;

    let deliveryCost = 0;
    let breakdown = "";

    if (data.type === "document") {
      deliveryCost = sameDistrict ? 60 : 80;
      breakdown = `Parcel Type: Document<br/>Rate: ৳${deliveryCost} (${
        sameDistrict ? "Within City" : "Outside City"
      })`;
    } else if (data.type === "non-document") {
      if (weight <= 3) {
        deliveryCost = sameDistrict ? 110 : 150;
        breakdown = `Parcel Type: Non-Document<br/>Weight: ${weight}kg<br/>Rate: ৳${deliveryCost} (${
          sameDistrict ? "Within City" : "Outside City"
        })`;
      } else {
        const extraKg = weight - 3;
        const extraCharge = extraKg * 40;
        deliveryCost = sameDistrict
          ? 110 + extraCharge
          : 150 + extraCharge + 40;
        breakdown = `Parcel Type: Non-Document<br/>Weight: ${weight}kg<br/>Base Rate: ৳${
          sameDistrict ? 110 : 150
        }<br/>Extra Weight (${extraKg.toFixed(1)}kg): ৳${extraCharge}<br/>${
          sameDistrict ? "" : "Additional Charge: ৳40<br/>"
        }`;
      }
    }

    Swal.fire({
      title: "Confirm Delivery Cost",
      html: `${breakdown}<hr/><h3>Total: ৳<strong>${deliveryCost}</strong></h3>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed to Payment",
      cancelButtonText: "Go Back",
    }).then((result) => {
      if (result.isConfirmed) {
        const now = new Date();
        const parcelData = {
          ...data,
          creation_date: now.toISOString(),
          createdAtFormatted: now.toLocaleString("en-GB", {
            timeZone: "Asia/Dhaka",
          }),
          deliveryCost,
          userEmail: user?.email || "unknown",
          createdBy: user?.displayName || "anonymous",
          trackingStatus: "Pending",
          trackingId: generateTrackingId(),
        };

        console.log("Parcel Saved:", parcelData);

        //save data to the server
        axiosSecure.post("/parcels", parcelData).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
                //redirect to the payment page
              icon: "success",
              title: "Parcel saved successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });

        //reset();
        //navigate("/");
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Send Your Parcel
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Door to Door Pickup & Delivery
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Parcel Info */}
        <div className="border p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-700">Parcel Info</h2>

          <div className="flex gap-6">
            <label className="label cursor-pointer flex items-center">
              <input
                type="radio"
                value="document"
                {...register("type", { required: true })}
                checked={selectedType === "document"}
                onChange={() => setSelectedType("document")}
                className="radio radio-primary"
              />
              <span className="ml-2">Document</span>
            </label>
            <label className="label cursor-pointer flex items-center">
              <input
                type="radio"
                value="non-document"
                {...register("type", { required: true })}
                checked={selectedType === "non-document"}
                onChange={() => setSelectedType("non-document")}
                className="radio radio-primary"
              />
              <span className="ml-2">Non-Document</span>
            </label>
          </div>

          <input
            {...register("title", { required: true })}
            className="input input-bordered w-full mt-4"
            placeholder="Describe your parcel"
          />
          {selectedType === "non-document" && (
            <input
              {...register("weight")}
              type="number"
              step="0.1"
              placeholder="Weight (kg)"
              className="input input-bordered w-full mt-4"
            />
          )}
        </div>

        {/* Sender & Receiver Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sender Info */}
          <div className="border p-4 rounded-xl">
            <h2 className="text-lg font-bold mb-4 text-gray-700">
              Sender Info
            </h2>
            <div className="flex flex-col gap-3">
              <input
                defaultValue={user?.displayName || "Logged-in User"}
                {...register("senderName", { required: true })}
                className="input input-bordered w-full"
              />
              <input
                {...register("senderContact", { required: true })}
                placeholder="Sender Contact"
                className="input input-bordered w-full"
              />
              <select
                {...register("senderRegion", { required: true })}
                onChange={(e) => setSenderRegion(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="">Select Region</option>
                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
              <select
                {...register("senderDistrict", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select District</option>
                {senderDistricts.map((d, i) => (
                  <option key={i}>{d}</option>
                ))}
              </select>
              <input
                {...register("senderAddress", { required: true })}
                placeholder="Sender Address"
                className="input input-bordered w-full"
              />
              <textarea
                {...register("pickupInstruction", { required: true })}
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </div>

          {/* Receiver Info */}
          <div className="border p-4 rounded-xl">
            <h2 className="text-lg font-bold mb-4 text-gray-700">
              Receiver Info
            </h2>
            <div className="flex flex-col gap-3">
              <input
                {...register("receiverName", { required: true })}
                placeholder="Receiver Name"
                className="input input-bordered w-full"
              />
              <input
                {...register("receiverContact", { required: true })}
                placeholder="Receiver Contact"
                className="input input-bordered w-full"
              />
              <select
                {...register("receiverRegion", { required: true })}
                onChange={(e) => setReceiverRegion(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="">Select Region</option>
                {regions.map((r, i) => (
                  <option key={i}>{r}</option>
                ))}
              </select>
              <select
                {...register("receiverDistrict", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select District</option>
                {receiverDistricts.map((d, i) => (
                  <option key={i}>{d}</option>
                ))}
              </select>
              <input
                {...register("receiverAddress", { required: true })}
                placeholder="Receiver Address"
                className="input input-bordered w-full"
              />
              <textarea
                {...register("deliveryInstruction", { required: true })}
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit Parcel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
