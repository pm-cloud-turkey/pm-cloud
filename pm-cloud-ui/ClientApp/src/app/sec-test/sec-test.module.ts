import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import {SecTestService} from "./sec-test.service";
import {SecTestComponent} from "./sec-test.component";


@NgModule({
  declarations: [SecTestComponent],
  providers: [ SecTestService],
  imports: [
  ]
})
export class SecTestModule { }
