import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IPlatforms } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  private readonly currentPlatform: IPlatforms;

  constructor(private platform: Platform) {
    const platforms = platform.platforms();
    if (platforms.includes(IPlatforms.ANDROID)) {
      this.currentPlatform = IPlatforms.ANDROID;
    } else if (platforms.includes(IPlatforms.IOS)) {
      this.currentPlatform = IPlatforms.IOS;
    } else {
      this.currentPlatform = IPlatforms.WINDOWS_PHONE;
    }
  }

  public getPlatform(): IPlatforms {
    return this.currentPlatform;
  }
}
