import React from "react";
import { Grid } from "semantic-ui-react";
import ImageGalley from "react-image-gallery";
import { setItems } from "../../../lib/services/CarouselOptions";

export default function PropertyCarousel(props) {
  const { images } = props;
  const items = setItems(images);

  return (
    <Grid.Column width={9}>
      {images.length > 0 && (
        <ImageGalley
          items={items}
          showPlayButton={false}
          showIndex={true}
          slideOnThumbnailOver={true}
        />
      )}
    </Grid.Column>
  );
}
