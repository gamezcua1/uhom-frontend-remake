import React, { useState } from "react";
import { Divider, Form, Header } from "semantic-ui-react";
import { toNumberFormat } from "../../../lib/helpers/inputsFormatter";

const LandFeaturesFields = ({ errors, register, required, defaultValues }) => {
  const {
    construction_area: constructionArea,
    front_meters: frontMeters,
    deep_meters: deepMeters,
  } = defaultValues;
  const [construction_area, setArea] = useState(constructionArea || "");
  const [deep_meters, setDeep] = useState(deepMeters || "");
  const [front_meters, setFront] = useState(frontMeters || "");

  return (
    <>
      <Header as="h3" content="Sobre el terreno" />
      <Divider />

      <Form.Group widths="equal">
        <Form.Field required={required}>
          <label htmlFor="construction_area">Área construida:</label>
          <div className="ui labeled input">
            <input
              id="constructionArea"
              name="construction_area"
              placeholder="Aŕea construida"
              ref={register}
              value={construction_area}
              onChange={(event) => toNumberFormat(event.target.value, setArea)}
            />
            <div className="ui label label">
              mts<sup>2</sup>
            </div>
          </div>
          {errors.construction_area && (
            <p className="dark-error">{errors.construction_area.message}</p>
          )}
        </Form.Field>

        <Form.Field required={required}>
          <label htmlFor="front_meters">Metros de frente:</label>
          <div className="ui right labeled input">
            <input
              id="frontMeters"
              name="front_meters"
              placeholder="Metros de frente"
              ref={register}
              value={front_meters}
              onChange={(event) => toNumberFormat(event.target.value, setFront)}
            />
            <div className="ui label label">mts</div>
          </div>
          {errors.front_meters && (
            <p className="dark-error">{errors.front_meters.message}</p>
          )}
        </Form.Field>

        <Form.Field required={required}>
          <label htmlFor="deep_meters">Metros de fondo:</label>
          <div className="ui labeled input">
            <input
              id="deepMeters"
              name="deep_meters"
              placeholder="Metros de fondo"
              ref={register}
              value={deep_meters}
              onChange={(event) => toNumberFormat(event.target.value, setDeep)}
            />
            <div className="ui label label">mts</div>
          </div>
          {errors.deep_meters && (
            <p className="dark-error">{errors.deep_meters.message}</p>
          )}
        </Form.Field>
      </Form.Group>
    </>
  );
};

export default LandFeaturesFields;
