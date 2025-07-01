import { api } from "@/shared/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface IParams {
    page?: string,
    limit?: string,
    search?: string,
    role: string,
    isActive?: string,
    sortBy?: string,
    sortOrder?: string,
    debtOnly?: string
}

export const usePartner = () => {
  // const queryClient = useQueryClient();
  const key = "partner";

  const getPartners = (params:IParams) =>
    useQuery({
      queryKey: [key, params],
      queryFn: () => api.get("partners", {params}).then((res) => res.data),
    });

  return { getPartners };
};
