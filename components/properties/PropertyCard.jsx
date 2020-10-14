import React from "react";
import axios from "axios";
import { Card, Divider, Grid, Menu } from "semantic-ui-react";
import Link from "next/link";
import LikeButton from "./actions/LikeButton";

export default function PropertyCard({ propertyInfo }) {
  const {
    uuid,
    images,
    address,
    price,
    location,
    bathrooms,
    bedrooms,
    construction_area,
    likes_info: likesInfo,
  } = propertyInfo;
  const { city, state } = location;

  const { image_url: imageUrl } = images[0];

  const imgUri = `${axios.defaults.baseURL}${imageUrl}`;
  return (
    <Grid.Column style={{ paddingTop: "16px" }}>
      <Card centered fluid id={uuid}>
        <Card.Content
          style={{
            height: "350px",
            backgroundImage: `url(${imgUri})`,
            backgroundSize: "cover",
          }}
        />
        <Card.Content>
          <Card.Header>{price}</Card.Header>

          <Divider hidden fitted />

          <Card.Content>
            <Menu borderless className="simple">
              <LikeButton likesInfo={likesInfo} propertyId={uuid} />
            </Menu>
          </Card.Content>

          <Card.Meta>
            <span>
              | {construction_area} mts<sup>2</sup> | {bedrooms} Recámara(s) |{" "}
              {bathrooms} Baño(s) |
            </span>
          </Card.Meta>
          <Card.Description>
            {address}, {city}, {state}.
          </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Link href={`/properties/${uuid}`}>Ver más...</Link>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
