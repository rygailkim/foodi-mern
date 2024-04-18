import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const UpdateProfile = () => {
    const {updateUserProfile} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        const name = data.name
        const photoURL = data.photoURL
        updateUserProfile(name, photoURL).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
      }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold">Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
             {...register("name")}
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            {/* <input type="file" className="file-input w-full max-w-xs" /> */}
            <input
             {...register("photoURL")}
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
          <input
              type="submit"
              value="Update"
              className="btn bg-green text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
