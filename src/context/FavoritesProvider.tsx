'use client';

import { Hero } from '@/components';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface FavoritesContextType {
  favorites: { id: string; hero: Hero }[];
  addFavorite: ({ id, hero }: { id: string; hero: Hero }) => void;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const [favorites, setFavorites] = useState<{ id: string; hero: Hero }[]>([]);

  const addFavorite = ({ id, hero }: { id: string; hero: Hero }) => {
    const newFavorite = { id, hero };
    setFavorites([...favorites, newFavorite]);
    updateLocalStorage([...favorites, newFavorite]);
  };

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    updateLocalStorage(updatedFavorites);
  };

  const updateLocalStorage = (updatedFavorites: { id: string; hero: Hero }[]) => {
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // const toggleFavoriteStorage = (id: string) => {
  //   const updatedFavorites = favorites.includes(id) ? favorites.filter((favId) => favId !== id) : [...favorites, id];

  //   setFavorites(updatedFavorites);
  //   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  // };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe ser utilizado dentro de un FavoritesProvider');
  }
  return context;
};
