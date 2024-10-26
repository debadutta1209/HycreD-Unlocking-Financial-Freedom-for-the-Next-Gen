import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  showLoanForm: boolean;
  setShowLoanForm: (show: boolean) => void;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <AppContext.Provider value={{
      showLoanForm,
      setShowLoanForm,
      showLoginModal,
      setShowLoginModal,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}