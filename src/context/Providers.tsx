import { DomainProvider } from './DomainProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <DomainProvider>{children}</DomainProvider>;
};
