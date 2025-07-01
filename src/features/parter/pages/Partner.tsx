import Box from "@/shared/ui/Box";
import Title from "@/shared/ui/Title";
import React, { useState } from "react";
import { usePartner } from "../service/usePartner";
import TableView from "../components/table-view/TableView";
import Options from "../components/options/Options";
import Paganation from "../components/paganation/Paganation";

const Partner = ({ role }: { role: string }) => {
  const { getPartners } = usePartner();

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const { data, isPending } = getPartners({ role, page, limit });


  return (
    <Box>
      <Title className={"mb-4"}>
        {role === "customer" ? "Mijozlar" : "Sotuvchilar"} ro'yhati
      </Title>
      <Options />
      <TableView data={data?.data} loading={isPending} />
      <Paganation page={page}
        setPage={setPage}
        total={data?.total || 0} />
    </Box>
  );
};

export default React.memo(Partner);
