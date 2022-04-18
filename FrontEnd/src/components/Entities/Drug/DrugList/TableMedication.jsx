import React from "react";
import {
  BtnDelete,
  BtnEdit,
  Table,
  Td,
  Th,
  Tr,
} from "./ListMedicationElements";

const TableMedication = ({ listMedications ,handleClickDelete,handleClickEdit}) => {
  return (
    <Table>
      <Tr>
        <Th>Reference</Th>
        <Th>Name Of Medication</Th>
        <Th>Price</Th>
        <Th>Quantity</Th>
        <Th>Action</Th>
      </Tr>

      {listMedications.map((medication) => (
        <Tr key={medication.reference}>
          <Td>{medication.reference}</Td>
          <Td>{medication.name}</Td>
          <Td>{medication.price}</Td>
          <Td>{medication.quantity}</Td>
          <Td>
            <BtnEdit id={medication.reference}>Edit</BtnEdit>
            <BtnDelete id={medication.reference} onClick={handleClickDelete}>Delete</BtnDelete>
          </Td>
        </Tr>
      ))}
    </Table>
  );
};

export default TableMedication;
