'use client';

import React from 'react';

interface Hero {
  name: string;
}

interface HeroListProps {
  heroes: Hero[];
}

const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  return (
    <div>
      <h2>Hero List</h2>
      <ul>
        {heroes?.map((hero, index) => (
          <li key={index}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
