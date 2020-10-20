import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Divider, Dropdown, Form, Header } from "semantic-ui-react";
import { toNumberFormat } from "../../../lib/helpers/inputsFormatter";
import { propertyRegistrationLocations } from "../../../lib/services/PropertiesOptions";

const PropertyFeaturesFields = ({ errors, register, control }) => {
  const [price, setPrice] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  return (
    <>
      <Header as="h3" content="Sobre la propiedad" />
      <Divider />
      <Form.Group>
        <Form.Field required width={8}>
          <label htmlFor="price">Costo de la propiedad: </label>
          <div className="ui labeled input">
            <div className="ui label label">$MXN</div>
            <input
              id="price"
              name="price"
              placeholder="Costo de la propiedad"
              ref={register}
              value={price}
              onChange={(event) => toNumberFormat(event.target.value, setPrice)}
            />
          </div>
          {errors.price && <p className="dark-error">{errors.price.message}</p>}
        </Form.Field>

        <Form.Field required width={4}>
          <label htmlFor="bathrooms">No. de baños:</label>
          <div className="ui input">
            <input
              id="bathrooms"
              name="bathrooms"
              placeholder="No. de baños"
              ref={register}
              value={bathrooms}
              onChange={(event) =>
                toNumberFormat(event.target.value, setBathrooms)
              }
            />
          </div>
          {errors.bathrooms && (
            <p className="dark-error">{errors.bathrooms.message}</p>
          )}
        </Form.Field>

        <Form.Field required width={4}>
          <label htmlFor="bedrooms">No. de habitaciones:</label>
          <div className="ui input">
            <input
              id="bedrooms"
              name="bedrooms"
              placeholder="No. de habitaciones"
              ref={register}
              value={bedrooms}
              onChange={(event) =>
                toNumberFormat(event.target.value, setBedrooms)
              }
            />
          </div>
          {errors.bedrooms && (
            <p className="dark-error">{errors.bedrooms.message}</p>
          )}
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field required width={10}>
          <label htmlFor="address">Dirección:</label>
          <div className="ui input">
            <input
              id="address"
              name="address"
              placeholder="Dirección"
              ref={register}
            />
          </div>
          {errors.address && (
            <p className="dark-error">{errors.address.message}</p>
          )}
        </Form.Field>

        <Form.Field required width={6}>
          <label htmlFor="location_id"> Municipio:</label>
          <Controller
            control={control}
            name="location_id"
            render={({ onChange }) => (
              <Dropdown
                placeholder="Selecciona el municipio"
                search
                selection
                options={propertyRegistrationLocations}
                ref={register}
                onChange={(_e, { value }) => onChange(value)}
              />
            )}
          />
          {errors.location && (
            <p className="dark-error">{errors.location.message}</p>
          )}
        </Form.Field>
      </Form.Group>
    </>
  );
};

export default PropertyFeaturesFields;
