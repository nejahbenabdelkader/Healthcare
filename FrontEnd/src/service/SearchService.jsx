export class SearchService {
    url= new URL("http://localhost:8080/search");
    async SearchNearbyDoctors(firm,nameDoctor,speciality) {
        let urlDOctor=new URL(this.url+"/doctor");
        urlDOctor.search=new URLSearchParams({
           'nameDoctor':nameDoctor,
           'speciality':speciality
           
        })
        const rawResponse = await fetch(
          urlDOctor,
          {
            method: "POST",
            body:JSON.stringify(firm),
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            
          }
        );
        return { data: await rawResponse.json(), staus: rawResponse.status };
      }

      async SearchNearbyPharmacy(pharmacy) {
        let urlDOctor=new URL(this.url+"/pharmacy");
        
        const rawResponse = await fetch(
          urlDOctor,
          {
            method: "POST",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            body:JSON.stringify(pharmacy)
          }
        );
        return { data: await rawResponse.json(), status: rawResponse.status };
      }
    
}