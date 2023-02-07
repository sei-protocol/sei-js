import { Event } from '@cosmjs/stargate';
import { tendermint35 } from '../tendermintRpc';

/**
 * Takes a Tendemrint 0.35 event and converts it into a Stargate `Event`
 */
export function fromTendermint35Event(event: tendermint35.Event): Event {
  return {
    type: event.type,
    attributes: event.attributes,
  };
}
