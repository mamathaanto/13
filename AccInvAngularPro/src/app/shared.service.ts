import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ItemUnitmodal } from './sidenav/inventory/in-masters/in-ma-material/in-ma-mat-unit/itemunit.modal';
import { AccountTypemodal } from './sidenav/accounts/ac-masters/ac-ma-accounttype/accounttype.modal';
import { AccountSubtypemodal } from './sidenav/accounts/ac-masters/ac-ma-accountsubtype/show-acsubtype/show-acsubtype.component';
import { AccountGroupmodal } from './sidenav/accounts/ac-masters/ac-ma-accountgroup/show-accgroup/show-accgroup.component';
import { Chartofaccountmodal } from './sidenav/accounts/ac-masters/ac-ma-chartofaccount/show-chartofaccount/show-chartofaccount.component';
import { statemodal } from './sidenav/inventory/in-masters/in-ma-state/show-state/show-state.component';
import { Vendormodal } from './sidenav/inventory/in-masters/in-ma-vendor/show-vendor/show-vendor.component';
import { Customermodal } from './sidenav/inventory/in-masters/in-ma-customer/show-customer/show-customer.component';
import { Countrymodal } from './sidenav/inventory/in-masters/in-ma-country/show-country/show-country.component';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";
readonly CountryUrl="https://restcountries.com/v2/all";

itemunitapi="http://localhost:2000/itemunit/";
stateapi='https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'

httpOptions = {
  headers: new HttpHeaders({
      'Content-type': 'application/json',
      'X-CSCAPI-KEY': 'MGZMRlZLbkZ0SmNiOGkxQzBlREFLYjBKdlZZU1BnRmlRbGI3N2lvVg=='
  })
  };




  constructor(private http:HttpClient) { }


  getCountry(): Observable<any[]>{
    return this.http.get<any[]>('https://api.countrystatecity.in/v1/countries', {headers: this.httpOptions.headers})
  }
  
  getStateOfSelectedCountry(countryIso: string): Observable<any>{
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states`,{headers: this.httpOptions.headers} )
  }
  // getStateOfSelectedCountry(): Observable<any>{
  //   return this.http.get(`https://api.countrystatecity.in/v1/countries/IN/states`,{headers: this.httpOptions.headers} )
  // }

  getCitiesOfSelectedState(countryIso: any, stateIso: any): Observable<any>{
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${stateIso}/cities`, {headers: this.httpOptions.headers} )
  }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl + '/department/',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl + '/department/',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + '/department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/department/');
  }

  getTaxList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/taxmaster/');
  }

  addTaxMaster(val:any){
    return this.http.post(this.APIUrl + '/taxmaster/',val);
  }

  updateTaxMaster(val:any){
    return this.http.put(this.APIUrl + '/taxmaster/',val);
  }

  deleteTaxMaster(val:any){
    return this.http.delete(this.APIUrl + '/taxmaster/'+val);
  }

  getAllTaxRate():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/taxmaster/');
  }



  getallitemunit():Observable<ItemUnitmodal[]>{
    return this.http.get<ItemUnitmodal[]>(this.APIUrl+'/itemunit/')
  }

  createitemunit(itemunitdata:any){
    return this.http.post(this.APIUrl+'/itemunit/',itemunitdata)
  }

  // updateitemunit(itemunitdata:any){
  //   return this.http.put(this.APIUrl + '/',itemunitdata);
  // }

  getallbyitemunitid(ItemUnitId:any):Observable<ItemUnitmodal>{
    return this.http.get<ItemUnitmodal>(this.APIUrl+'/itemunit/'+ItemUnitId)
  }
  removeitemunit(ItemUnitId:any){
    return this.http.delete(this.APIUrl+'/itemunit/'+ItemUnitId)
  }
  updateitemunit(ItemUnitId:any,itemunitdata:any){
    return this.http.put(this.APIUrl+'/itemunit/'+ItemUnitId,itemunitdata)
  }


  getallaccounttype():Observable<AccountTypemodal[]>{
    return this.http.get<AccountTypemodal[]>(this.APIUrl+'/acctype/')
  }
  

 
  addItemCategory(val:any){
    return this.http.post(this.APIUrl + '/itemcategory/',val);
  }

  updateItemCategory(val:any){
    return this.http.put(this.APIUrl + '/itemcategory/',val);
  }

  deleteItemCategory(val:any){
    return this.http.delete(this.APIUrl + '/itemcategory/'+val);
  }

  getItemCategoryList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/itemcategory/');
  }
  getAllItemCategory():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/itemcategory/');
  }


  getallaccountsubtype():Observable<AccountSubtypemodal[]>{
    return this.http.get<AccountSubtypemodal[]>(this.APIUrl+'/accsubtype/')
  }

  createaccountsubtype(accountsubtypedata:any){
    return this.http.post(this.APIUrl+'/accsubtype/',accountsubtypedata)
  }

  getallaccountsubtypebyid(AccSubTypeId:any):Observable<AccountSubtypemodal>{
    return this.http.get<AccountSubtypemodal>(this.APIUrl+'/accsubtype/'+AccSubTypeId)
  }
  removeaccountsubtype(AccSubTypeId :any){
    return this.http.delete(this.APIUrl+'/accsubtype/'+AccSubTypeId )
  }
  updateaccountsubtype(AccSubTypeId :any,accountsubtypedata:any){
    return this.http.put(this.APIUrl+'/accsubtype/'+AccSubTypeId,accountsubtypedata)
  }

  
  getallaccountgroup():Observable<AccountGroupmodal[]>{
    return this.http.get<AccountGroupmodal[]>(this.APIUrl+'/accgroup/')
  }

  createaccountgroup(accountgroupdata:any){
    return this.http.post(this.APIUrl+'/accgroup/',accountgroupdata)
  }

  getallaccountgroupbyid(AccGroupId:any):Observable<AccountGroupmodal>{
    return this.http.get<AccountGroupmodal>(this.APIUrl+'/accgroup/'+AccGroupId)
  }
  removeaccountgroup(AccGroupId:any){
    return this.http.delete(this.APIUrl+'/accgroup/'+AccGroupId )
  }
  updateaccountgroup(AccGroupId:any,accountgroupdata:any){
    return this.http.put(this.APIUrl+'/accgroup/'+AccGroupId,accountgroupdata)
  }



  
  getallchartofaccount():Observable<Chartofaccountmodal[]>{
    return this.http.get<Chartofaccountmodal[]>(this.APIUrl+'/chartofaccount/')
  }

  createchartofaccount(chartofaccountdata:any){
    return this.http.post(this.APIUrl+'/accsubtype/',chartofaccountdata)
  }

  getallchartofaccountbyid(ChartOfAccountId:any):Observable<Chartofaccountmodal>{
    return this.http.get<Chartofaccountmodal>(this.APIUrl+'/chartofaccount/'+ChartOfAccountId)
  }
  removechartofaccount(ChartOfAccountId :any){
    return this.http.delete(this.APIUrl+'/chartofaccount/'+ChartOfAccountId )
  }
  updatechartofaccount(ChartOfAccountId :any,accountsubtypedata:any){
    return this.http.put(this.APIUrl+'/chartofaccount/'+ChartOfAccountId,accountsubtypedata)
  }


  getallstate():Observable<statemodal[]>{
    return this.http.get<statemodal[]>(this.APIUrl+'/state/')
  }

  createstate(statedata:any){
    return this.http.post(this.APIUrl+'/state/',statedata)
  }

  getallstatebyid(StateId:any):Observable<statemodal>{
    return this.http.get<statemodal>(this.APIUrl+'/state/'+StateId)
  }
  updatestate(StateId :any,statedata:any){
    return this.http.put(this.APIUrl+'/state/'+StateId,statedata)
  }
 

  getState(){
   return this.http.get(this.stateapi)
  }
  getcountryid(){
    return this.http.get(this.APIUrl+'/country/')
  }



  getallvendor():Observable<Vendormodal[]>{
    return this.http.get<Vendormodal[]>(this.APIUrl+'/vendor/')
  }

  createvendor(vendordata:any){
    return this.http.post(this.APIUrl+'/vendor/',vendordata)
  }

  getallbyvendorid(VendorId:any):Observable<Vendormodal>{
    return this.http.get<Vendormodal>(this.APIUrl+'/vendor/'+VendorId)
  }
  removevendor(VendorId:any){
    return this.http.delete(this.APIUrl+'/vendor/'+VendorId)
  }
  updatevendor(VendorId:any,vendordata:any){
    return this.http.put(this.APIUrl+'/vendor/'+VendorId,vendordata)
  }

  getCountryList(CountryId:any):Observable<Countrymodal>{
    return this.http.get<Countrymodal>(this.APIUrl + '/country/'+CountryId);
  }

  addCountry(countrydata:any){
    return this.http.post(this.APIUrl + '/country/',countrydata);
  }

  deleteCountry(CountryId:any){
    return this.http.delete(this.APIUrl + '/country/'+CountryId);
  }

  getAllCountryList():Observable<Countrymodal[]>{
    return this.http.get<Countrymodal[]>(this.APIUrl+'/country/');
  }

  updateCountry(CountryId:any,countrydata:any){
    return this.http.put(this.APIUrl + '/country/'+CountryId,countrydata);
  }

  getGlobalCountry():Observable<any>{
    return this.http.get(this.CountryUrl);
  }


  getallcustomer():Observable<Customermodal[]>{
    return this.http.get<Customermodal[]>(this.APIUrl+'/customer/')
  }

  createcustomer(customerdata:any){
    return this.http.post(this.APIUrl+'/customer/',customerdata)
  }

  getallbycustomerid(CustomerId:any):Observable<Customermodal>{
    return this.http.get<Customermodal>(this.APIUrl+'/customer/'+CustomerId)
  }
  removecustomer(CustomerId:any){
    return this.http.delete(this.APIUrl+'/customer/'+CustomerId)
  }
  updatecustomer(CustomerId:any,customerdata:any){
    return this.http.put(this.APIUrl+'/customer/'+CustomerId,customerdata)
  }





  
  

  
 
}