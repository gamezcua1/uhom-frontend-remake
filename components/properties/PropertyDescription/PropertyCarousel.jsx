import React from "react";
import axios from "axios";
import ReactSlick from "react-slick";
import { Grid } from "semantic-ui-react";
import ReactImageMagnify from "react-image-magnify";
import { largeImage, smallImage } from "../../../lib/services/CarouselOptions";

export default function PropertyCarousel(props) {
  const { images } = props;
  const HINT_MESSAGE = "Click para hacer zoom";

  return (
    <Grid.Column width={9}>
      <ReactSlick dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        {images.map((image, index) => {
          const url = `${axios.defaults.baseURL}${image}`;
          const smImage = smallImage(url);
          const lgImage = largeImage(url);

          return (
            <div key={index}>
              <ReactImageMagnify
                smallImage={{ ...smImage }}
                largeImage={{ ...lgImage }}
                lensStyle={{ backgroundColor: "rgba(0,0,0,.6)" }}
                isHintEnabled
                shouldHideHintAfterFirstActivation
                enlargedImagePosition="over"
                hintTextMouse={HINT_MESSAGE}
              />
            </div>
          );
        })}
      </ReactSlick>
    </Grid.Column>
  );
}
