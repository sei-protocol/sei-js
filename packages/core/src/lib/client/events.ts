import { Event } from '@cosmjs/stargate';
import { Event as Tendermint35Event } from '../tendermint35';

/**
 * Takes a Tendermint 0.35 event and converts it into a Stargate `Event`
 */
export function fromTendermint35Event(event: Tendermint35Event): Event {
  return {
    type: event.type,
    attributes: event.attributes,
  };
}
