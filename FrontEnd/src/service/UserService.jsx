export class UserService {
  async authenticate(email, password) {
    const URl = "http://localhost:8080/login?email=";
    const rawResponse = await fetch(
      URl + email + "&password=" + password,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    return { data: await rawResponse.json(), status: rawResponse.status };
  }

  async addUser(data) {
    const URl = "http://localhost:8080/user/add";
    const rawResponse = await fetch(
      URl,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
        body :JSON.stringify(data)
      }
    );
    return { data: await rawResponse.json(), status: rawResponse.status };
  }

  async getUserWithEmail(email) {
    const URl = "http://localhost:8080/user/email/";
    const rawResponse = await fetch(
      URl+email,
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

  async getSpeciality() {
    const URl = "http://localhost:8080/user/speciality/all";
    const rawResponse = await fetch(
      URl,
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
