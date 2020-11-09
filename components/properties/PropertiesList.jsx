import React from "react";
import { Grid } from "semantic-ui-react";
import Paginator from "../shared/paginator";
import PropertyCard from "./PropertyCard";

const PropertiesList = ({ properties, paginationProps, isUser }) => (
  <Grid stackable columns={3} padded>
    <Grid.Row centered>
      {properties.map((property) => (
        <PropertyCard
          key={property.uuid}
          id={property.uuid}
          propertyInfo={property}
          isUser={isUser}
        />
      ))}
    </Grid.Row>
    <Paginator {...paginationProps} />
  </Grid>
);

PropertiesList.defaultProps = {
  properties: [],
};

export default PropertiesList;
