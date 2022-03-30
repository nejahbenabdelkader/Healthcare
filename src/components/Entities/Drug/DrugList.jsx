import React from "react";
import {
  Content,
  H1,
  Td,
  Table,
  Tr,
  Th,
  InputSearch,
  BtnSearch,
  Search,
} from "./DrugListElements";

const DrugList = ({ DrugList }) => {
  return (
    <Content>
      <H1>List Of Medications</H1>
      <Search>
        <InputSearch placeholder="Search Medication" />
        <BtnSearch>Search</BtnSearch>
      </Search>
      <Table>
        {drugList.map((drugItem) => (
          <Tr>
            <Th>drugItem.Reference</Th>
            <Th>drugItem.name</Th>
            <Th>drugItem.price</Th>
            <Th>drugItem.quantity</Th>
          </Tr>
        ))}
      </Table>
    </Content>
  );
};

export default DrugList;
