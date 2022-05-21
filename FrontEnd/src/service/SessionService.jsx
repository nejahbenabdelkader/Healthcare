class SessionService {

  url= new URL("http://localhost:8080/session");

  async getSessionWithDoctorId(doctorId) {
    const rawResponse = await fetch(
      this.url+"/get/"+doctorId,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        
      })
      return { data: await rawResponse.json(), status: rawResponse.status };
    };

    async addSessions(doctorId,sessions) {
      const rawResponse = await fetch(
        this.url+`/add/${doctorId}`,
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body:JSON.stringify(sessions)
          
        })
        return { data: await rawResponse.json(), status: rawResponse.status };
      };
}

export default SessionService ;