import React from "react";
import { Grid, Header } from "semantic-ui-react";
import ImageCard from "./ImageCard";

const ImageList = ({ images, propertyId }) => {
  return (
    <>
      <Header as="h3" content="Fotos de la propiedad" />
      {images && images.length > 0 ? (
        <Grid stackable columns={2} padded>
          <Grid.Row centered>
            {images.map((image) => (
              <ImageCard
                image={image}
                propertyId={propertyId}
                key={propertyId}
              />
            ))}
          </Grid.Row>
        </Grid>
      ) : (
        <Header as="h5" content="Esta propiedad no cuenta con imágenes" />
      )}
    </>
  );
};

export default ImageList;
