import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  idQueryParams: number;
  fragment: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.idQueryParams = this.route.snapshot.queryParams['id'];
    this.fragment = this.route.snapshot.fragment;

    this.route.queryParams.subscribe((queryParams) => {
      this.idQueryParams = queryParams['id'];
    });

    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });

    this.route.params.subscribe((params: Params) => {
      this.user.id = params.id;
      this.user.name = params.name;
    });
  }

  onClick() {
    this.router.navigate(['/users', 10, 'rodrigo'], {queryParams: {id: 1}, fragment: 'vemPraCa'});
  }
}
