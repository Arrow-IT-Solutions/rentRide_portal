import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/layout.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {


  constructor(public layoutService:LayoutService)
  {

  }

  
  OpenDialog() {
    
    var component = this.layoutService.OpenDialog(AddCategoryComponent, "");

    component.OnClose.subscribe(() => {
      //this.FillData();
    });
  }

  
}
