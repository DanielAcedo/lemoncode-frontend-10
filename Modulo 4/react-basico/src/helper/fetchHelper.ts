export const fetchJson = (
  ...parameters: Parameters<typeof fetch>
): Promise<Response> => fetch(...parameters).then((res) => res.json());
