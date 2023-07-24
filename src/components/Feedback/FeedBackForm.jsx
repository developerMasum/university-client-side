import axios from "axios";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { handleSubmit, control, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newItem = {
      avatar: user?.photoURL,
      testimonial: data.review,
      name:user?.displayName,
      rating: data.rating,
    };
    console.log("new", newItem);

    axios
      .post("https://university-server-side.vercel.app/feedback", newItem)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          // Reset the form (if needed)
          // reset();

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Application has been sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          // Navigate to the desired page (e.g., "/my-college")
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle error if necessary
        console.error("Error submitting application:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold mb-6">Write a Review</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="review"
          >
            Review
          </label>
          <Controller
            name="review"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                id="review"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Write your review here..."
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rating"
          >
            Rating
          </label>
          <Controller
            name="rating"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="rating"
                type="number"
                min="1"
                max="5"
                step="1"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your rating (1-5)"
                onChange={(e) => setValue("rating", parseInt(e.target.value))}
              />
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

// make a ReviewForm using react hook form Review input and rating input , make it by tailwindcss and jsx.  style it beautiful and responsive
