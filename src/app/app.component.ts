import { FormGroup } from '@angular/forms';
import { OrdersService } from './services/orders.service';
import { Component, OnInit } from '@angular/core';
import { IFilter, IOrders } from './models/orders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'amrjamal.sandbox';
  visible: boolean = false;
  searchInput: string | number;
  orderItems: IOrders[];
  orderEachItem: any = [];

  constructor(private OrdersService: OrdersService) {}
  ngOnInit(): void {
    this.getBasket();
  }

  getBasket() {
    let filteredData: IFilter = {
      first: 0,
      rows: 10,
      globalFilter: '',
    };
    this.OrdersService.getAllOrders(filteredData).subscribe({
      next: (res: any) => {
        this.orderItems = res.orders;
        console.log(res);
      },
    });
  }

  showDialog(id: any) {
    this.visible = true;
    this.OrdersService.getItemOrder(id).subscribe({
      next: (res: any) => {
        this.orderEachItem = res;
      },
    });
  }
  filteredTable() {
    let filteredData = {
      first: 0,
      rows: 10,
      globalFilter: this.searchInput || '',
    };
    if (filteredData.globalFilter !== '') {
      this.OrdersService.getAllOrders(filteredData).subscribe({
        next: (res: any) => {
          this.orderItems = res.orders;
        },
      });
    }
  }

  refreshItems() {
    this.getBasket();
  }
}
