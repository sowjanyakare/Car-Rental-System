import { Routes } from "@angular/router";
import { LogoutComponent } from "./logout/logout.component";
import { AvailableCarsComponent} from "./available-cars/available-cars.component";
import {BookingformComponent} from "./bookingform/bookingform.component";
import { PaymentComponent} from "./payment/payment.component";
import{UserProfileComponent} from "./userprofile/userprofile.component";
import{ PaymentpageComponent} from "./paymentpage/paymentpage.component";

export const dashboardRoutes:Routes=[
    {path:'logout',component:LogoutComponent},
    {path:'avaliable',component:AvailableCarsComponent},
    {path:'payment',component:PaymentComponent },
    {path:'bookingform',component:BookingformComponent },
    {path:'paymentpage',component:PaymentpageComponent },
    {path:'',component:UserProfileComponent },
    {path:'userprofile',component:UserProfileComponent },
    
];