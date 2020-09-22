import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import PropertiesController from "../../controllers/PropertiesController";
import Panel from "../smart/PropertyPanel/Panel"

const defaultProperty = {
  uuid: null,
  images: [],
  price: null,
  address: null,
  likes_info: {
    total_likes: 0,
    currently_liked: false
  },
  bedrooms: 0,
  bathrooms: 0,
  square_meters: 0.0,
  extra_description: null,
  location: {
    city: null,
    state: null,
    country: null
  }
}

function PropertyPanel(props){
  const { property_uuid } = useParams()
  const [property, setProperty] = useState(defaultProperty);

  useEffect(() => {
    PropertiesController.show(property_uuid)
    .then(res => {
      if(res.status === 200){
        setProperty(res.data)
      }
    })
  }, [property_uuid])
  
  return(
    <>
      {
        property
        ? <Panel propertyInfo={property}
            propertyLocation={property.location}
          />
        : <Redirect to="/properties" />
      }
    </>
  )
}

export default withRouter(PropertyPanel);