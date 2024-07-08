import { animate, style, transition, trigger } from '@angular/animations';

export interface NavbarData {
  routeLink?: string | '';
  icon?: string;
  label?: string;
  expanded?: boolean;
  id?: string;
  idhash?: string;
  char?: string;
  items?: NavbarData[];
}

export const navbarData: NavbarData[] = [
  {
    label: 'Dashboard',
    id: 'dashboard',
    icon: 'speed',
  },
  {
    label: 'Categories',
    id: 'categories',
    icon: 'category',
    routeLink :"categories"
  },
  {
    label: 'Products',
    id: 'Products',
    icon: 'fastfood',
    routeLink :"products",
  },
  {
    label: 'Employees',
    id: 'Employees',
    icon: 'group',
    items : [
      {
        label: 'Roles',
        id: '',
        icon: '',
        routeLink : 'employees/roles'
        
      },
      {
        label: 'Users',
        id: 'employees',
        icon: '',
        routeLink : 'employees'
        
      },
     
    ]
    
  },
  {
    label: 'Settings',
    id: 'Settings',
    icon: 'settings',
  },
];
