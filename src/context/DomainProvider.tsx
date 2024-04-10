'use client';

import { DomainApp } from '@/domain';
import React, { createContext, useContext, PropsWithChildren, ReactElement } from 'react';

interface DomainContextProps {
  domain: DomainApp;
}

const DomainContext = createContext<DomainContextProps>({} as DomainContextProps);

function DomainProvider(props: PropsWithChildren<{}>): ReactElement<PropsWithChildren<{}>> {
  const domain = DomainApp.create();

  return (
    <DomainContext.Provider
      value={{
        domain,
      }}
      {...props}
    />
  );
}

function useDomain(): DomainContextProps {
  const context = useContext(DomainContext);

  if (context === undefined) {
    throw new Error(`useDomain must be used within a DomainProvider`);
  }
  return context;
}

export { DomainProvider, useDomain };
