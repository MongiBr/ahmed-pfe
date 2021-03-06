import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class InterventionService {
    public base_Url = "http://localhost:5000";
    public isConnected: boolean = false;
    constructor(private http: HttpClient) {}

    public createIntervention(intervention) {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });
        if (token) {
            this.isConnected = true;
        }
        return this.http.post(
            this.base_Url + "/interventions/add-intervention",
            intervention,
            { headers }
        );
    }

    public getAllInterventions() {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });
        if (token) {
            this.isConnected = true;
        }
        return this.http.get(this.base_Url + "/interventions/all", { headers });
    }

    public getInterventionById(id) {
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders({
            "x-auth-token": token ? token : "",
        });

        return this.http.get(this.base_Url + "/intervention/:" + id, {
            headers,
        });
    }

    public updateInterventionStatus(intervention) {
        return this.http.put(
            this.base_Url + `/interventions/update/${intervention.id}`,
            intervention
        );
    }
}
