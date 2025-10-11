import { getMe, postLogin, postSignup } from "@/api/auth";
import queryClient from "@/api/queryClient";
import { removeHeader, setHeader } from "@/utils/header";
import { deleteSecureStore, saveSecureStore } from "@/utils/secureStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { useEffect } from "react";

const useGetMe = () => {
  const { data, isError } = useQuery({
    queryFn: getMe,
    queryKey: ["auth", "getMe"],
    retry: false, // 재시도 하지 않음
    refetchOnWindowFocus: false, // 포커스 시 재요청 안함
  });

  useEffect(() => {
    if (isError) {
      removeHeader("Authorization");
      deleteSecureStore("accessToken");
    }
  }, [isError]);

  return { data };
};

// 로그인 훅
const useLogin = () => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken }) => {
      setHeader("Authorization", `Bearer ${accessToken}`);
      await saveSecureStore("accessToken", accessToken);

      //내 정보를 가져오는 훅 호출
      queryClient.fetchQuery({ queryKey: ["auth", "getMe"] });
      router.replace("/");
    },
    onError: () => {},
  });
};

// 회원가입 훅
const useSignup = () => {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => {
      console.log("✅ 회원가입 성공! 로그인 화면으로 이동합니다.");
      router.replace("/auth/login");
    },
    onError: (error) => {
      console.error("❌ 회원가입 실패:", error);
    },
  });
};

// 로그인 훅과 회원가입 훅을 한번에 사용하기 위한 훅
const useAuth = () => {
  const { data } = useGetMe();
  const loginMutation = useLogin();
  const signupMutation = useSignup();

  const logout = () => {
    removeHeader("Authorization");
    deleteSecureStore("accessToken");
    queryClient.resetQueries({ queryKey: ["auth"] });
  };

  return {
    auth: {
      id: data?.id || "",
    },
    loginMutation,
    signupMutation,
    logout,
  };
};

export default useAuth;
