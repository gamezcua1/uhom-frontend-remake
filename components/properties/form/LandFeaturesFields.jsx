import React from "react";
import { Divider, Form, Header } from "semantic-ui-react";

const LandFeaturesFields = ({ errors, register }) => (
  <>
    <Header as="h3" content="Sobre el terreno" />
    <Divider />

    <Form.Group widths="equal">
      <Form.Field required>
        <label htmlFor="construction_area">Área construida:</label>
        <div className="ui input">
          <input
            id="constructionArea"
            name="construction_area"
            placeholder="Aŕea construida"
            ref={register}
          />
        </div>
        {errors.construction_area && (
          <p className="dark-error">{errors.construction_area.message}</p>
        )}
      </Form.Field>

      <Form.Field required>
        <label htmlFor="front_meters">Metros de frente:</label>
        <div className="ui input">
          <input
            id="frontMeters"
            name="front_meters"
            placeholder="Metros de frente"
            ref={register}
          />
        </div>
        {errors.front_meters && (
          <p className="dark-error">{errors.front_meters.message}</p>
        )}
      </Form.Field>

      <Form.Field required>
        <label htmlFor="deep_meters">Metros de fondo:</label>
        <div className="ui input">
          <input
            id="deepMeters"
            name="deep_meters"
            placeholder="Metros de fondo"
            ref={register}
          />
        </div>
        {errors.deep_meters && (
          <p className="dark-error">{errors.deep_meters.message}</p>
        )}
      </Form.Field>
    </Form.Group>
  </>
);

export default LandFeaturesFields;
