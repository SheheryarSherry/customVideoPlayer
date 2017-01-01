import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { TimedisplayPipe } from './timedisplay.pipe';


@Component({
  selector: 'app-toolbar',
  template: `
    <div id = "playerToolBar">

     <a id="playBtn" class="btn btn-default" (click)="videoService.playVideo()">
        <i [ngClass]=
            "{
            'fa-play': !videoService.isPlaying, 
            'fa-pause': videoService.isPlaying
             }" 
            class="fa">
        </i>
      </a>

      <a id="muteBtn" class="btn btn-default" (click)="videoService.muteVideo()">
        <i [ngClass]=
            "{
            'fa-volume-off': videoService.isMuted, 
            'fa-volume-up': !videoService.isMuted
             }" 
            class="fa">
        </i>
      </a>

      <span id = "videoTime">{{videoService.currentTime | timedisplay}} / {{videoService.totalTime | timedisplay }}</span>

      <a id="fsBtn" class="btn btn-default pull-right" (click)="videoService.fullScreen()"><i class="fa fa-expand"></i></a>

      <a id="detailsBtn" class="btn btn-default pull-right" (click)="videoService.details()"><i class="fa fa-bars"></i></a>
   
    </div>
  `,  
  styles: [`
  
    #playerToolBar {
        background-color: #464545;
    }
    #playerToolBar a {
        font-size: 1.2rem;
        color: #b8b8bb;
    }
    #playerToolBar .btn {
        border-radius:0px;
        width:50px;
    }
    #playerToolBar .btn:focus {
        border: none;
        box-shadow: 0;
        outline: 0 none;
    }
  
  `]
})
export class ToolbarComponent implements OnInit {

  constructor(public videoService: VideoService) { }

  ngOnInit() {
  }

}
