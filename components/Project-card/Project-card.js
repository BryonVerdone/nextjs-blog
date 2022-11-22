import React from 'react';

const ProjectCard = () => {
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src='https://placeimg.com/400/225/arch'
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Coming Soon!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>Code</button>
          <button className='btn btn-primary'>Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
