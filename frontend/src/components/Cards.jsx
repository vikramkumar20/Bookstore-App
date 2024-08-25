import React from 'react'

function Cards({ item }) {
  // console.log(item);
  return (
    <>
      <div className="mt-4 my-5 p-3 ">
        <div className="card bg-base-100 w-75 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.Category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.Price}</div>
              <div className="cursor-pointer badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-2 duration-200">Buy Now</div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
