import { LighbulbServiceBuilder } from '../../builders/lighbulb-service-builder';
import { InnrWhite } from './innr-white';
import { Service } from 'homebridge';

export class InnrWhiteTemperature extends InnrWhite {
  getAvailableServices(): Service[] {
    const lightbulbService = new LighbulbServiceBuilder(
      this.platform,
      this.accessory,
      this.client,
      this.state
    )
      .withOnOff()
      .withBrightness()
      .withColorTemperature()
      .build();
    return [lightbulbService];
  }
}
