import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-boody',
  templateUrl: './boody.component.html',
  styleUrl: './boody.component.scss'
})
export class BoodyComponent {
UserName:string=""
IsDissplay:boolean=false;


Dissplay()
{
  if(this.UserName=="")
  {
    return false
  }
  else return true
}


OnButtonClicked()
{
this.UserName=""
}



showDetails = false;
log: string[] = [];
clickCount = 0;

OnlogClick() 
{
  this.showDetails=!this.showDetails
  this.clickCount++;
  const timestamp = new Date().toLocaleString();
  this.log.push(`Clicked at ${timestamp}`);
}

LogStyle=
{
   'background-color': 'blue'
}

logclass=
{
  "logclass":this.log !=null
}

}
