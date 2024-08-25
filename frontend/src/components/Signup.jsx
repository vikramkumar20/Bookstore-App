import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center" >
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input type="text" placeholder='Enter your Full Name' className='w-80 px-3 border rounded-md outline-none'
                  {...register("name", { required: true })} />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none'
                  {...register("email", { required: true })}
                />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input type="text" placeholder='Enter your Password' className='w-80 px-3 border rounded-md outline-none'
                  {...register("password", { required: true })}
                />
                <br />
                {/* errors will return when field validation fails  */}
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Button */}
              <div className=" mt-5 flex justify-between">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                <p>
                  Have account?
                  <button type="submit" className="underline text-blue-500 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}>
                    Login
                    <Login />
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Signup
