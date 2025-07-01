import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React from "react";
import { usePartner } from "../service/usePartner";
import TableView from "../components/table-view/TableView";
import Options from "../components/options/Options";

const Partner = ({ role }: { role: string }) => {
  const { getPartners } = usePartner();
  const { data, isPending } = getPartners({ role });

  return (
    <Box>
      <Title className={"mb-4"}>
        {role === "customer" ? "Mijozlar" : "Sotuvchilar"} ro'yhati
      </Title>
      <Options/>
      <TableView data={data?.data} loading={isPending} />

    </Box>
  );
};

export default React.memo(Partner);
