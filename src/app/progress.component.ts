import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-progress',
  template: `
  
    <div id = "progressMeterfull" (click) = "videoService.seekVideo($event)">
        <div id = "progressMeter" 
        (click) = "videoService.seekVideo($event)" 
        [style.width.px] = "videoService.calculatedWidth">
        </div>
    </div>

    <div id = "thumbScrubber" 
        (mousedown) = "videoService.dragStart($event)"
        [style.top.px] = "videoService.calculatedScrubY-2"
        [style.left.px] = "videoService.calculatedWidth">
    </div>

  `,
  styles: [`

      #progressMeterfull, #progressMeter {
          cursor: pointer;
          height:11px;
          margin:0;
      }
      #progressMeterfull {
          background-color: #26344f;
          position: relative;
      }
      #progressMeter {
          background-color: #5d1f1c;
          position: absolute;
          top:0px;
          left:0px;
          width:0px;
      }
      #thumbScrubber {
          background-color: #b8b8bb;
          border: 1px solid #3d3d3d;
          width:15px;
          height:15px;
          border-radius: 15px;
          position:absolute;
          top:-1000px;
          left:-1000px;
          cursor: pointer;
      }

  `]
})
export class ProgressComponent implements OnInit {

  constructor(public videoService: VideoService) { }

  ngOnInit() {
  }

}
