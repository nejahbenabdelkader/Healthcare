import moment from "moment";

export class AppoitmentService {
  URl = new URL("http://localhost:8080/appoitment")
    async getAppoitmentByPatientId(patient_id) {
        const rawResponse = await fetch(
          this.URl+"/get/patient?patientId="+patient_id,
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

      async getAppoitmentByDoctorId(doctor_id) {
        const rawResponse = await fetch(
          this.URl+"/get/doctor?doctorId="+doctor_id,
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

      async getAppoitmentByDate(dateAppoitment) {
        const parametres=new URLSearchParams({
          dateAppoitment:moment(dateAppoitment).format('DD-MMM-yyyy hh:mm:ss')
        })
        const rawResponse = await fetch(
          this.URl+"/get/date?"+parametres,
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

      async addAppoitment(appoitment) {
        const rawResponse = await fetch(
          this.URl+"/add",
          {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            body:JSON.stringify(appoitment)
            
          }
        );
        return { data: await rawResponse.json(), status: rawResponse.status };
      }

      async activateAppoitment(appoitment) {
        const rawResponse = await fetch(
          this.URl+"/activate",
          {
            method: "Put",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            body:JSON.stringify(appoitment)
          }
        );
        return { data: await rawResponse.json(), status: rawResponse.status };
      }
    
}