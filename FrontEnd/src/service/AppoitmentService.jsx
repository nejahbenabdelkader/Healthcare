export class AppoitmentService {
  URl = new URL("http://localhost:8080/appoitment")
    async getAppoitmentByPatientId(patient_id) {
        const rawResponse = await fetch(
          this.URl+"/get/"+patient_id,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            
          }
        );
        return { data: await rawResponse.json(), status: rawResponse.status };
      }
    
}