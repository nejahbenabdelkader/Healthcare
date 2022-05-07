class SessionService {

  url= new URL("http://localhost:8080/session");

  async getSessionWithDoctorId(doctorId) {
    const rawResponse = await fetch(
      URl+"/get/"+doctorId,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        
      })
      return { data: await rawResponse.json(), status: rawResponse.status };
    };
}