import React from "react";
import {Content, H1, Td,Table, Tr, Th, InputSearch, BtnEdit, BtnDelete,BtnAdd,Position} from "./ListMedicationElements";

function ListMedications() {
    return ( 
                <Content>
                    <H1>List Of Medications</H1>
                    <Position>
                    <BtnAdd>Add New Medication</BtnAdd>
                    <InputSearch placeholder="Search Medication"/></Position>
                    <Table >
                        <Tr>
                            <Th>Reference</Th>
                            <Th>Name Of Medication</Th>
                            <Th>Price</Th>
                            <Th>Quantity</Th>
                            <Th>Action</Th>
                        </Tr>
                        <Tr>
                            <Td>
                                215478
                            </Td>
                            <Td>
                                Panadol
                            </Td>
                            <Td>
                                4.500Dt
                            </Td>
                            <Td>
                                6
                            </Td>
                            <Td>
                                <BtnEdit>Edit</BtnEdit>
                                <BtnDelete>Delete</BtnDelete>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                215478
                            </Td>
                            <Td>
                                Panadol
                            </Td>
                            <Td>
                                4.500Dt
                            </Td>
                            <Td>
                                6
                            </Td>
                            <Td>
                                <BtnEdit>Edit</BtnEdit>
                                <BtnDelete>Delete</BtnDelete>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                215478
                            </Td>
                            <Td>
                                Panadol
                            </Td>
                            <Td>
                                4.500Dt
                            </Td>
                            <Td>
                                6
                            </Td>
                            <Td>
                                <BtnEdit>Edit</BtnEdit>
                                <BtnDelete>Delete</BtnDelete>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                215478
                            </Td>
                            <Td>
                                Panadol
                            </Td>
                            <Td>
                                4.500Dt
                            </Td>
                            <Td>
                                6
                            </Td>
                            <Td>
                                <BtnEdit>Edit</BtnEdit>
                                <BtnDelete>Delete</BtnDelete>
                            </Td>
                        </Tr>
                    </Table>
                </Content>
            
        
     );
}

export default ListMedications;