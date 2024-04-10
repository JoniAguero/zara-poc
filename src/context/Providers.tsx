import { DomainProvider } from './DomainProvider';
import { FavoritesProvider } from './FavoritesProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <DomainProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </DomainProvider>
  );
};
