import { Component, ComponentRef, Injectable } from '@angular/core';
import { AdhostDirective } from 'src/app/Core/directive/adhost.directive';
import { DynamicDilogComponent } from '../component/dynamic-dilog/dynamic-dilog.component';
import { Type } from '@angular/compiler';
import { MessageService } from 'primeng/api';
import * as queryString from 'query-string';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public adHost: AdhostDirective;

  public config = {
    dir: 'ltr',
    lang: 'en',
  };

  baseApiUrl = 'https://localhost:62921';
  constructor() {}

  public OpenDialog(componentView: any, componentName: string) {
    this.adHost.viewContainerRef.clear();
    const component = this.adHost.createMyComponent(DynamicDilogComponent);

    component.instance.componentView = componentView;
    component.instance.adHostDynamic = this.adHost;
    component.instance.componentName = componentName;

    return component.instance;
  }

  showError(
    messageService: MessageService,
    key?: string,
    autoClose?: boolean,
    content?: string
  ) {
    messageService.add({
      key: key,
      sticky: !autoClose,
      severity: 'error',
      summary: '',
      detail: content,
    });
  }

  showSuccess(
    messageService: MessageService,
    key?: string,
    autoClose?: boolean,
    content?: string
  ) {
    messageService.add({
      key: key,
      sticky: !autoClose,
      severity: 'success',
      summary: '',
      detail: content,
    });
  }

  filterNonNull(obj: any) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
  }

  Filter(obj: any) {
    return queryString.stringify(this.filterNonNull(obj));
  }

  ConvertToISoString(date: any) {
    // var newDateAsString = date.toISOString().split('T')[0];
    console.log(date);
    return date.toISOString();
  }

  ConvertToIso(date: any) {
    console.log('Date : ', date);
    const dateString = date;

    const dateObject = new Date(dateString);

    const monthIndex = dateObject.getMonth();

    const month = monthIndex + 1;

    // console.log("M : ",month);

    const day = dateObject.getDate();

    // console.log("D : ",day);

    const year = dateObject.getFullYear();

    // console.log("year : ",year)

    var newDate = year + '-' + month + '-' + day;

    const inputDate = new Date(newDate);
    const isoDate = inputDate.toISOString();

    return isoDate;
  }
}
