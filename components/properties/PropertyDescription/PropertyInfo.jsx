import React, { useContext } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import AppopinmentButton from "../actions/AppointmentButton";
import LikeButton from "../actions/LikeButton";
import ExtraDescription from "./ExtraDescription";
import MainFeatures from "./MainFeatures";
import MainInfo from "./MainInfo";
import { UserContext } from "../../../lib/context/UserContext";

export default function PropertyInfo({ propertyInfo, propertyLocation }) {
  const { isAdmin } = useContext(UserContext);
  const {
    uuid,
    address,
    bedrooms,
    bathrooms,
    extra_description,
    likes_info,
    price,
    construction_area,
    front_meters,
    deep_meters,
  } = propertyInfo;

  const { city, state } = propertyLocation;

  return (
    <Grid.Column width={6}>
      <Segment.Group>
        <MainInfo
          price={price}
          fullAddress={`${address}, ${city}, ${state}.`}
        />

        {!isAdmin() && (
          <Menu borderless secondary>
            <LikeButton likesInfo={likes_info} propertyId={uuid} />
          </Menu>
        )}

        <MainFeatures
          features={{
            bedrooms,
            bathrooms,
            construction_area,
            front_meters,
            deep_meters,
          }}
        />

        <ExtraDescription extraDescription={extra_description} />

        <Segment>
          {!isAdmin() && <AppopinmentButton address={address} price={price} />}
        </Segment>
      </Segment.Group>
    </Grid.Column>
  );
}
