const organisationNameKey: string = "organisationName";

export const getSavedOrganisationName = () =>
  localStorage.getItem(organisationNameKey);
export const setSavedOrganisationName = (value: string) =>
  localStorage.setItem(organisationNameKey, value);
