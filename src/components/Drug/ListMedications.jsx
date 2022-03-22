import React from "react";
import {Content, H1, Td,Table, Tr, Th, InputSearch, BtnSearch, Search} from "./ListMedicationElements";

function ListMedications() {
    return ( 
                <Content>
                    <H1>List Of Medications</H1>
                    <Search>
                    <InputSearch placeholder="Search Medication"/>
                    <BtnSearch>Search</BtnSearch>
                    </Search>
                    <Table >
                        <Tr>
                            <Th>Reference</Th>
                            <Th>Name Of Medication</Th>
                            <Th>Price</Th>
                            <Th>Quantity</Th>
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
                        </Tr>
                    </Table>
                </Content>
            
        
     );
}

export default ListMedications;