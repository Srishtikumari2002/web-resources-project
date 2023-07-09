import React, { useState } from 'react';
import Card from '../Card';
import Filter from '../filter/index';
import videoData from '../../database/videos.json';

const Index = () => {
  const [filter, setFilter] = useState('html');

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  return (
    <div className="m-10">
      <div className="flex justify-center fixed z-5 top-8 left-16 w-full">
        <Filter onStateChange={handleFilterChange} />
      </div>
      <div className="flex flex-wrap gap-6 justify-around absolute top-28 ">
        {videoData.map(
          (res, i) =>
            filter === res.tag && (
              <Card
                className
                key={i}
                title={res.title}
                link={res.link}
                description={res.description}
                i={i}
                img={res.img}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Index;
