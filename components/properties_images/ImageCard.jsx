import React from "react";
import { Card, Grid } from "semantic-ui-react";
import axios from "axios";
import DeleteImageButton from "./DeleteImageButton";

const ImageCard = ({ image, propertyId }) => {
  const { uuid: imageId, image_url: imagePath } = image;
  const imageURI = `${axios.defaults.baseURL}${imagePath}`;

  return (
    <Grid.Column style={{ paddingTop: "16px" }}>
      <Card centered fluid id={imageId}>
        <Card.Content
          style={{
            height: "350px",
            backgroundImage: `url(${imageURI})`,
            backgroundSize: "cover",
          }}
        />

        <Card.Content extra textAlign="center">
          <DeleteImageButton imageId={imageId} propertyId={propertyId} />
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default ImageCard;
