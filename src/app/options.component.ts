import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-options',
  template: `

     <div id="VideoOptions" [hidden] = "!videoService.showDetails" class="card">
            <h1 >{{videoService.currentTitle}}</h1>
        <div class="panel-body">
            <div class="col-xs-6">
                <h2>Video Details:</h2>
                <p>{{videoService.currentDesc}}</p>
            </div>
            <div class="col-xs-6">
                <ul class="list-group">
                    <h2>Playlist:</h2>
                    <li class="list-group-item" 
                    *ngFor="let playlistItem of videoService.playlist; let i = index" 
                    (click)="videoService.selectedVideo(i)">
                    {{playlistItem.title}}</li>
                </ul>
            </div>
        </div>
    </div>

  `,
  styles: [`
  
  h1 {
      background-color: gray;
  }

 ul > li{
      background-color: gray;
      cursor: pointer;
  }
  
  `]
})
export class OptionsComponent implements OnInit {

  constructor(public videoService: VideoService) { }

  ngOnInit() {
  }

}
