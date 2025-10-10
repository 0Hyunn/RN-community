import { QueryClient } from "@tanstack/react-query";

// 캐시 데이터 유지 시간 20초
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 20 * 1000,
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryClient;
