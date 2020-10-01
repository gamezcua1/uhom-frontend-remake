import React from "react";
import { Grid, Icon, Pagination } from "semantic-ui-react";

export default function Paginator(props) {
  const { totalPages, handleChange, currentPage } = props;

  const enableComponent = () => (totalPages > 1 ? true : false);

  return (
    <>
      {enableComponent() && (
        <Grid.Row centered>
          <Pagination
            id="paginator"
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true,
            }}
            firstItem={{ content: <Icon name="fast backward" />, icon: true }}
            lastItem={{ content: <Icon name="fast forward" />, icon: true }}
            prevItem={{ content: <Icon name="caret left" />, icon: true }}
            nextItem={{ content: <Icon name="caret right" />, icon: true }}
            secondary
            pointing
            activePage={currentPage}
            totalPages={totalPages}
            onPageChange={(event, data) => handleChange(event, data)}
          />
        </Grid.Row>
      )}
    </>
  );
}
