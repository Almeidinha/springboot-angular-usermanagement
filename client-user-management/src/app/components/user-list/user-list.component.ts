import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  userList: Array<User>;
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['detail', 'id', 'name', 'username'];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.findAllUsers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllUsers() {
    this.authService.findAllUsers().subscribe(data => {
      this.userList = data;
      this.dataSource.data = data;
    });
  }

  detail(user: User) {
    localStorage.setItem('detailUser', JSON.stringify(user));
    this.router.navigate(['/user', user.id]);
  }

}
