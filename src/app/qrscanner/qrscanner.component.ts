import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

import { Router } from '@angular/router';

import { QrCodeDetails } from '../objects/qrcodedetails';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.scss']
})
export class QrscannerComponent implements OnInit {


  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasCameras = false;
  hasPermission: boolean;
  qrResultString: string;

  availableDevices: MediaDeviceInfo[];
  selectedDevice: MediaDeviceInfo;

  constructor(private router: Router) { }

  ngOnInit() {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasCameras = true;

      console.log('Devices: ', devices);
      this.availableDevices = devices;

      // selects the devices's back camera by default
      // for (const device of devices) {
      //     if (/back|rear|environment/gi.test(device.label)) {
      //         this.scanner.changeDevice(device);
      //         this.selectedDevice = device;
      //         break;
      //     }
      // }
    });

    this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
    });

    this.scanner.permissionResponse.subscribe((answer: boolean) => {
      console.log(this.scanner);
      this.hasPermission = answer;
    });

  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
    //this.router.navigate(['menutypes']);

    //let qrcodedata: QrCodeDetails = JSON.parse(this.qrResultString);

    //qrcodedata.qrCodeRouteType


    this.router.ngOnDestroy();
    window.location.href = 'https://raga-mac-book-pro-2017.local:4200/menutypes';
  }

  onDeviceSelectChange(selectedValue: string) {
    console.log('Selection changed: ', selectedValue);
    this.selectedDevice = this.scanner.getDeviceById(selectedValue);
  }

}
