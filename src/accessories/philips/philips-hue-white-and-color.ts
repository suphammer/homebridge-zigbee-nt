import { LighbulbServiceBuilder } from '../../builders/lighbulb-service-builder';
import { PhilipsHueWhite } from './philips-hue-white';
import { Service } from 'homebridge';

export class PhilipsHueWhiteAndColor extends PhilipsHueWhite {
  getAvailableServices(): Service[] {
    const lightbulbService = new LighbulbServiceBuilder(
      this.platform,
      this.accessory,
      this.client,
      this.state
    )
      .withOnOff()
      .withColorXY()
      .build();
    return [lightbulbService];
  }
}
