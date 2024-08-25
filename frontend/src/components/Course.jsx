import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json';
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container  mx-auto md:px-20 px-4 ">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl mb-2">
            We're delighted to have <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-18">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio id, obcaecati expedita pariatur iusto incidunt in laborum facere nesciunt illum, illo, nisi ut laboriosam voluptatem dolores exercitationem debitis quia dicta?
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-1 mt-5 rounded-md hover:bg-pink-600">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 min-h-40 md:grid-cols-4 ">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
    </div>
    </>
  )
}

export default Course;
