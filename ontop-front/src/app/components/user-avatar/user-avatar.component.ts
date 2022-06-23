import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
interface unit {
  IdUnidade: number;
  Nome: string;
  Cidade?: string;
}
@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent implements OnInit {
  userName?: string;
  unit?: string;
  avatarURL?: string;
  privilegio: any;
  UNIDADES: unit[] = [];
  unidadesControl!: FormControl;
  defUni: any = { IdUnidade: 1, Nome: 'Matriz' };
  grupo = '';

  constructor(private router: Router, public dialog: MatDialog) {
    this.initUnidades();
  }

  ngOnInit(): void {
    this.unidadesControl = new FormControl(this.defUni, Validators.required);
  }

  logout(): void {
    this.userName = '';
    this.unit = '';
    this.avatarURL = '';
    this.router.navigateByUrl('/').then();
  }
  initUnidades() {
    // if (!this.canChangeUnidade()) {
    // 	return;
    // }
    let u = localStorage.getItem('UNIDADES') as any;
    this.UNIDADES = JSON.parse(u);
  }
  changeUnidade(e: any) {
    let { IdUnidade } = e.value;
  }

  canChangeUnidade(): boolean {
    return !!this.grupo && this.grupo !== 'Franquia';
  }
}
