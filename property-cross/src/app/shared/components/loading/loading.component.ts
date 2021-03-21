import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PlatformsService } from '@core/services/platforms.service';
import { IPlatforms } from '@core/models';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  public currentPlatform: IPlatforms;

  constructor(private platform: PlatformsService) {}

  public ngOnInit(): void {
    this.currentPlatform = this.platform.getPlatform();
  }
}
