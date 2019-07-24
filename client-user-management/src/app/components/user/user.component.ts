import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: string;
  currentUser: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('detailUser'));
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramns => {
      if (paramns.has('id')) {
        this.userId = paramns.get('id');
      }
    });
  }

}
