interface IQuery {
  [key: string]: string;
}

export const createParams = (query: IQuery) => {
  const params = new URLSearchParams();
  for (let param in query) {
    if (query[param]) {
      params.append(param, query[param]);
    }
  }

  return params;
};
