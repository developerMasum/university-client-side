import React, { useContext } from "react";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const ImgKey = "88a32f9606ac9f1f4bc4d022254b25e1";

const AdmissionForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);
  const {
    collegeName,
    admissionWebsite,
    featuredImage,
    details,
    location,
    sports,
    researchHistory,
    events,
    admissionDates,
    collegeImage,
  } = data;

  const { register, handleSubmit, reset } = useForm();
  const ImgHostingURL = `https://api.imgbb.com/1/upload?key=${ImgKey}`;
  //   console.log(ImgHostingURL);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(ImgHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imageURL = imgRes.data.display_url;
          const { name, number, address, subject, email } = data;

          const newItem = {
            candidateName: name,
            user: user?.email,
            number: number,
            address: address,
            subject: subject,
            email: email,
            image: imageURL,
            collegeName: collegeName,
            admissionWebsite,
            featuredImage,
            details,
            location,
            sports,
            researchHistory,
            events,
            admissionDates,
            collegeImage,
          };
          console.log(newItem);
          axios
            .post(
              "https://university-server-side.vercel.app/candidate",
              newItem
            )
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your Application has been sent SuccessFully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/my-college");
              }
            });
        }
      });
  };

  const passPara = () => {
    const para = params.id;
    console.log(para);
    localStorage.setItem("data", para);
  };

  return (
    <div className="w-1/2 px-10 pt-28 mx-auto ">
      <h2 className="text-center text-2xl font-bold"> Application Form </h2>
      {/* form ar kaj baj  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Candidate Name*</span>
          </label>
          <input
            type="text"
            placeholder="Candidate Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label>
            <span className="label-text font-semibold">Subject Selection*</span>
          </label>
          <select
            {...register("subject")}
            className="input input-bordered w-full "
          >
            <option value="Science">Science</option>
            <option value="Business Studies ">Business Studies </option>
            <option value="Arts">Arts</option>
          </select>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Candidate Email*</span>
          </label>
          <input
            type="email"
            placeholder="Candidate Email "
            {...register("email", { required: true })}
            defaultValue={user?.email}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Phone Number *</span>
          </label>
          <input
            type="number"
            placeholder="Phone Number "
            {...register("number", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Address*</span>
          </label>
          <input
            type="text"
            placeholder="address "
            {...register("address", { required: true })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full pb-12 ">
          <label className="label">
            <span className="label-text">Candidate Image* </span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>

        {/*       
        <input className="btn btn-warning btn-sm mt-4 mb-5 " type="submit" value="Add Item" /> */}

        <div className="flex justify-center">
          <button onClick={passPara} className="btn btn-warning w-1/2">
            {" "}
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
