class AdminService {

    url= new URL("http://localhost:8080/admin");
    async getNumbersOfUsers() {
      const rawResponse = await fetch(
        this.url+"/numbers",
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        return { data: await rawResponse.json(), status: rawResponse.status };
      };

      async getAllDoctors() {
        const rawResponse = await fetch(
          this.url+"/doctors",
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          })
          return { data: await rawResponse.json(), status: rawResponse.status };
        };

        async getAllPatients() {
            const rawResponse = await fetch(
              this.url+"/patients",
              {
                method: "GET",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              })
              return { data: await rawResponse.json(), status: rawResponse.status };
            };

        async getUnactivatedUsers() {
            const rawResponse = await fetch(
              this.url+"/unactivated",
              {
                method: "GET",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
              })
              return { data: await rawResponse.json(), status: rawResponse.status };
            };

            async activateUsers(usersId) {
                const rawResponse = await fetch(
                  this.url+"/activate",
                  {
                    method: "Post",
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/json",
                    },
                    body:JSON.stringify(usersId)
                  })
                  return { data: await rawResponse.json(), status: rawResponse.status };
                };
  }
  export default AdminService ;