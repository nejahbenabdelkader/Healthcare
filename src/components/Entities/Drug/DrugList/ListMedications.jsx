import { Collapse } from "@mui/material";
import React, { useState } from "react";
import {
  Content,
  H1,
  Td,
  Table,
  Tr,
  Th,
  InputSearch,
  BtnEdit,
  BtnDelete,
  BtnAdd,
  Position,
} from "./ListMedicationElements";
import TableMedication from "./TableMedication";

function ListMedications() {
  const initialListMedications = [
    {
      reference: "215478",
      name: "Doliprane",
      price: "4500Dt",
      quantity: "4",
    },
    {
      reference: "215478",
      name: "Panadol",
      price: "2300Dt",
      quantity: "6",
    },
    {
      reference: "215478",
      name: "Fervex",
      price: "6300Dt",
      quantity: "4",
    },
  ];
  const [listMedication, setAddMedication] = useState(true);
  const [listMedications, setListMedications] = useState(
    initialListMedications
  );
  const handleClickDelete=(e)=> {
    console.log(e.target.id)
  }
  const handleChangeSearch = (e) => {
    setListMedications(
      initialListMedications.filter((medication) => {
        const regex = new RegExp("^" + e.target.value);
        return regex.test(medication.name.toLowerCase());
      })
    );
  };
  const handleClickAddMedication=()=> {
       console.log("workinng")
       setListMedications(false)
  }
  return (
    <Content>
      <H1>List Of Medications</H1>
      <Position>
        <BtnAdd onClick={handleClickAddMedication}>
          Add New Medication
        </BtnAdd>
        <InputSearch
          placeholder="Search Medication"
          onChange={handleChangeSearch}
        />
      </Position>
      {listMedication ? (
        <Collapse timeout={2000} in={listMedication}>
           <TableMedication listMedications={listMedications} handleClickDelete={handleClickDelete}/>
        </Collapse>
      ) : (
          <div />
      )}
    </Content>
  );
}

export default ListMedications;
