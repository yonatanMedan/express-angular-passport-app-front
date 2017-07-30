import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service/user.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private User:UserService) { }
    user;
  ngOnInit() {
    this.User.getUser().then(user=>{
      this.user = user.local;
    })
  }

}
