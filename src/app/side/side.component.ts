import { Component, Inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { UsuarioComponent } from '../components/general/usuario/usuario.component';
import { AuthService } from '../services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  mostrar = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    animal: string;
    name: string;
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, public Auth: AuthService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  ngOnInit(): void {
    console.log(this.Auth.vato);
    if (this.Auth.vato === 'uno') {
      this.Auth.vato = 'uno';
    }
  }
}
