import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/_services/state.service';

@Component({
  selector: 'app-header-manufacturer',
  templateUrl: './header-manufacturer.component.html',
  styleUrls: ['./header-manufacturer.component.css']
})
export class HeaderManufacturerComponent implements OnInit {

  firstName: string | null = null;
  lastName: string | null = null;

  private subscriptions = new Subscription();

  constructor(
    private stateService: StateService // Injectez StateService
  ) {}
  ngOnInit(): void {
    this.subscriptions.add(
      this.stateService.getFirstName().subscribe(name => this.firstName = name)
    );
    this.subscriptions.add(
      this.stateService.getLastName().subscribe(name => this.lastName = name)
    );
  }
}
