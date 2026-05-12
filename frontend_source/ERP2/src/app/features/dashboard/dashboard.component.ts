import { Component } from '@angular/core';

@Component({
  selector: 'smart-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  kpis = [
    { label: 'Daily Output', value: '18,420', unit: 'pcs', delta: '+12.4%', tone: 'success', icon: 'fal fa-industry' },
    { label: 'Active Orders', value: '74', unit: 'jobs', delta: '+6', tone: 'info', icon: 'fal fa-clipboard-list-check' },
    { label: 'Line Efficiency', value: '87.6', unit: '%', delta: '+3.1%', tone: 'primary', icon: 'fal fa-tachometer-alt-fast' },
    { label: 'Rework Rate', value: '2.8', unit: '%', delta: '-0.7%', tone: 'warning', icon: 'fal fa-tools' }
  ];

  lines = [
    { name: 'Cutting', target: 5200, actual: 4860, progress: 93 },
    { name: 'Stitching', target: 7800, actual: 7425, progress: 95 },
    { name: 'Assembly', target: 6400, actual: 5880, progress: 92 },
    { name: 'Packing', target: 5000, actual: 4620, progress: 92 }
  ];

  productionMix = [
    { label: 'Match Ball', value: 42 },
    { label: 'Training Ball', value: 31 },
    { label: 'Club Ball', value: 18 },
    { label: 'Samples', value: 9 }
  ];
}
