import { updatePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKey } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useUpdatePost() {
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (postId) => {
      queryClient.invalidateQueries({ queryKey: [queryKey.POST, queryKey.GET_POST, postId] });
      queryClient.invalidateQueries({ queryKey: [queryKey.POST, queryKey.GET_POSTS] });
    },
  });
}

export default useUpdatePost;
