export interface employ{
   
    
    empId: number,
    empName: string,
    mobileNumber: string,
    emailId: string,
    officeTransport: string,
    cafeteriaSubscription:any ,
    project:[{
        name:string,
        role:string,
        capaity:string

    }]
    confirmEditCreate():boolean;


}