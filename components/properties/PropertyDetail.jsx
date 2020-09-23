import React from "react";
import { Grid } from "semantic-ui-react";
import PropertyCarousel from "./Carousel";
import PropertyInfo from "./PropertyInfo";

export default function Panel(props) {
  const { propertyInfo, propertyLocation } = props;
  const { images } = propertyInfo;

  return (
    <Grid stackable columns={2} padded verticalAlign="middle">
      <Grid.Row centered>
        <PropertyCarousel images={images} />
        <PropertyInfo
          propertyInfo={propertyInfo}
          propertyLocation={propertyLocation}
        />
      </Grid.Row>
    </Grid>
  );
}
