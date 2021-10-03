export const selectedOrganisationService = {
  setSelectedOrganisation: (organisationName: string): void => {
    localStorage.setItem("selectedOrganisation", organisationName);
  },
  getSelectedOrganisation: (): string =>
    localStorage.getItem("selectedOrganisation") as string,
};
