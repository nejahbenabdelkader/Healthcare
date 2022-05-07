import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppoitmentService } from "../../../../service/AppoitmentService";
import { AppoitmentsData } from "../../../Info/Data";
import { Content, Td, Table, Th, TrHead, Tr } from "./AppointmantsElements";

function Appointments() {
  const [appoitment,setAppoitment]=useState([])
  const userData = useSelector((state) => state.user.loggedUser);
  useEffect(
     ()=> {
       console.log(userData)
       new AppoitmentService().getAppoitmentByPatientId(userData.user).then(response=> {
         console.log(response)
         setAppoitment(response.data)
       })
     }
    ,[]
  )
  return (
    <Content id="appoitment">
      <Table>
        <TrHead>
          <Th>Date</Th>
          <Th>Doctor</Th>
          <Th>Speciality</Th>
          <Th>Status</Th>
        </TrHead>
        {appoitment.map((appoitment) => (
          <Tr status={appoitment.status}>
            <Td>{`${appoitment.appoitmentDate.dayAppoitment}  ${appoitment.appoitmentDate.hourAppoitment}`}</Td>
            <Td>{appoitment.doctor.fullName}</Td>
            <Td>{appoitment.doctor.speciality}</Td>
          </Tr>
        ))}
      </Table>
    </Content>
  );
}

export default Appointments;
