import React, { useState } from "react";
import { useRouter } from "next/router";
import { Tab } from "semantic-ui-react";

import PropertiesCatalog from "../../../../properties/catalog/PropertiesCatalog";
import { useUserLikes } from "../../../../../lib/hooks/users";

const LikesPane = () => {
  const noResultMessage =
    "Aún no has dado 'like' a ninguna propiedad. Aquí aparecerán todas las propiedades que te gustan";
  const router = useRouter();
  const [page, setPage] = useState(router.query.page || 1);
  const { properties, itemsPerPage, totalItems, response } = useUserLikes(
    router.query.userId,
    { page }
  );

  return (
    <Tab.Pane>
      <PropertiesCatalog
        currentPage={page}
        itemsPerPage={itemsPerPage}
        noResultMessage={noResultMessage}
        properties={properties}
        setCurrentPage={setPage}
        response={response}
        totalItems={totalItems}
      />
    </Tab.Pane>
  );
};

export default LikesPane;
