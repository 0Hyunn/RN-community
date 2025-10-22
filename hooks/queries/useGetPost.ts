import { getPost } from "@/api/post";
import { queryKey } from "@/constants";
import { useQuery } from "@tanstack/react-query";

function useGetPost(id: number) {
  return useQuery({
    queryFn: () => getPost(Number(id)),
    queryKey: [queryKey.POST, queryKey.GET_POST, id],
    enabled: Boolean(id),
  });
}

export default useGetPost;
