import { Component, OnInit } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-share-profile',
  templateUrl: './share-profile.component.html',
  styleUrls: ['./share-profile.component.css']
})
export class ShareProfileComponent  implements OnInit{

  ngOnInit(): void {
      
  }

  copyToClipboard(): void {
    const inputElement = document.getElementById('urlInput') as HTMLInputElement;
    navigator.clipboard.writeText(inputElement.value)
      .then(() => {
        // Success feedback (like a tooltip or a toast)
      })
      .catch(err => {
        // Error feedback
        console.error('Could not copy text: ', err);
      });
  }

}
