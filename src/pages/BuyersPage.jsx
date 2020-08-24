import React from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import { sortBy, map } from "lodash";
import { useHistory } from "react-router-dom";

import "../style/buyers.scss";

export default function BuyersPage() {
  const history = useHistory();
  const [activeRow, setActiveRow] = React.useState("");
  const { buyers } = useSelector(({ buyers }) => {
    return {
      buyers: buyers.buyers
    };
  });

  const [state, setState] = React.useState({
    column: null,
    data: buyers,
    direction: null
  });

  const handleSort = clickedColumn => {
    const { column, data, direction } = state;

    if (column !== clickedColumn) {
      setState({
        column: clickedColumn,
        data: sortBy(data, [clickedColumn]),
        direction: "ascending"
      });
      return;
    }

    setState({
      ...state,
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  const onIdHandler = event => {
    console.log(event.target.id);
    history.push(`/buyers/${event.target.id}`);
  };

  React.useEffect(() => {
    setState(prev => {return { ...prev, data: buyers }});
  }, [buyers]);

  const { column, data, direction } = state;
  return (
    <div>
      <Table sortable celled selectable fixed color="grey" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "id" ? direction : null}
              onClick={handleSort.bind(null, "id")}
            >
              ID покупателя
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "firstName" ? direction : null}
              onClick={handleSort.bind(null, "firstName")}
            >
              Имя покупателя
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "avg" ? direction : null}
              onClick={handleSort.bind(null, "avg")}
            >
              Средний чек
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "count" ? direction : null}
              onClick={handleSort.bind(null, "count")}
            >
              Количество покупок
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "total" ? direction : null}
              onClick={handleSort.bind(null, "total")}
            >
              Общая выручка
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data &&
            map(data, ({ id, firstName, avg, count, total }, i) => (
              <Table.Row
                key={i}
                active={activeRow === id ? true : false}
                onClick={e => setActiveRow(e.target.id)}
              >
                <Table.Cell
                  className="user-id"
                  id={id}
                  onClick={onIdHandler}
                  selectable
                >
                  {id}
                </Table.Cell>
                <Table.Cell>{firstName}</Table.Cell>
                <Table.Cell>{avg}</Table.Cell>
                <Table.Cell>{count}</Table.Cell>
                <Table.Cell>{total}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
