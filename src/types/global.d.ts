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
