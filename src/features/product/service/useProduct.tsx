import { product } from "@/shared/keys";
import { api } from "@/shared/lib/axios";
import {
  useQuery,
  // useQueryClient
} from "@tanstack/react-query";

export const useProduct = () => {
  // const queryClient = useQueryClient();

  const getProducts = (params: any) =>
    useQuery({
      queryKey: [product, params],
      queryFn: () => api.get("product", { params }).then((res) => res.data),
    });

  return { getProducts };
};
