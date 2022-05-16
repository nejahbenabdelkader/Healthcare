import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppoitmentService } from "../../../../service/AppoitmentService";
import { AppoitmentsData } from "../../../Info/Data";
import { Content, Td, Table, Th, TrHead, Tr } from "./AppointmantsElements";
import moment from "moment";
function Appointments() {
  const [appoitment,setAppoitment]=useState([])
  console.log(appoitment)
  const userData = useSelector((state) => state.user.userData);
  console.log(userData)
  useEffect(
      ()=> {
        const fetchData =async ()=>{
          const response=await new AppoitmentService().getAppoitmentByPatientId(userData.id)
          console.log(response)  
           if (response.status==202) setAppoitment(response.data)
        }
        fetchData();
       
     }
    ,[userData]
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
            <Td>{moment(appoitment.appoitmentDate).format('DD-MMM-yyyy hh:mm:ss')}</Td>
            <Td>{appoitment.doctor.fullName}</Td>
            <Td>{appoitment.doctor.speciality}</Td>
          </Tr>
        ))}
      </Table>
    </Content>
  );
}

export default Appointments;
