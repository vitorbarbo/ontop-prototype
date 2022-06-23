import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Table {
  image: string;
  name: string;
  type: string;
  date: Date;
  amount: number;
  status: string;
  actions: string;
}

const ELEMENT_DATA: Table[] = [
  {
    image: '/assets/images/table_one.svg',
    name: 'Darlene Robertson',
    type: 'Traditional',
    date: new Date(2021, 2, 4),
    amount: 200,
    status: 'Active',
    actions: '',
  },
  {
    image: '/assets/images/table_two.svg',
    name: 'Darlene Robertson',
    type: 'Traditional',
    date: new Date(2021, 2, 4),
    amount: 200,
    status: 'Active',
    actions: '',
  },
  {
    image: '/assets/images/table_three.svg',
    name: 'Darlene Robertson',
    type: 'Traditional',
    date: new Date(2021, 2, 4),
    amount: 200,
    status: 'Signature pending',
    actions: '',
  },
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  Client: string = 'Client Name';
  Search!: FormGroup;
  Filters!: FormGroup;
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'name',
    'type',
    'date',
    'amount',
    'status',
    'actions',
  ];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.Search = this.form.group({
      search: ['', Validators.required],
    });
    this.Filters = this.form.group({
      created: ['', Validators.required],
      contractType: ['', Validators.required],
      contractorName: ['', Validators.required],
      Status: ['', Validators.required],
    });
  }
}
