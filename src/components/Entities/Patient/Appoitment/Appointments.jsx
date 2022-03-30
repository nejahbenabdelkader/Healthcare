import React from "react";
import { AppoitmentsData } from "../../../Info/Data";
import {Content, Td,Table,  Th, TrHead,  Tr} from "./AppointmantsElements";

function Appointments() {
    return (
        <Content>
        <Table >
            <TrHead>
                <Th>Date</Th>
                <Th>Doctor</Th>
                <Th>Speciality</Th>
                <Th>Status</Th>
            </TrHead>  
            {AppoitmentsData.map(appoitment=> 
                <Tr status={AppoitmentsData.status}>
                <Td>{appoitment.date}</Td>
                <Td>{appoitment.doctorName}</Td>
                <Td>{appoitment.speciality}</Td>
                <Td>{appoitment.status}</Td>
            </Tr>
            )}
            
            
            </Table>
            </Content>
        );
}

export default Appointments;

