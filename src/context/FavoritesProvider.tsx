'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface FavoritesContextType {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const [favorites, setFavorites] = useState<number[]>([]);

  const addFavorite = (id: number) => {
    setFavorites([...favorites, id]);
    toggleFavoriteStorage(id);
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((favId) => favId !== id));
    toggleFavoriteStorage(id);
  };

  const toggleFavoriteStorage = (id: number) => {
    const updatedFavorites = favorites.includes(id) ? favorites.filter((favId) => favId !== id) : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

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
