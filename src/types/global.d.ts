type RequestParams<Params> = Params;

interface RequestMutationSettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    any,
    any
  >;
}

interface RequestQuerySettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/react-query').UseQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    any
  >;
}

type User = {
  city?: string;
  displayName: Include<import('firebase/auth').User['displayName'], string>;
  email: Include<import('firebase/auth').User['email'], string>;
  phoneNumber: import('firebase/auth').User['phoneNumber'];
  photoURL: import('firebase/auth').User['photoURL'];
  uid: import('firebase/auth').User['uid'];
  pokemons: {
    name: Pokemon['name'];
    id: Pokemon['id'];
    image: Pokemon['sprites']['front_default'];
  }[];
};
