import { createContext, useState } from "react";

// import { ModalContextType, ModalData } from 'types/Modal'

const initialContext = {
  companyState: { symbol: "" },
  setCompanyState: (companyState: { symbol: string }) => {},
};
export const CompanyContext = createContext(initialContext);

const CompanyProvider = ({ children }: { children: JSX.Element }) => {
  const [companyState, setCompanyState] = useState({ symbol: "" });

  // can define setters and getters here, then give access to them
  // in the 'value' prop below

  return (
    <CompanyContext.Provider value={{ companyState, setCompanyState }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
