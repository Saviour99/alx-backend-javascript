import ClassRoom from './0-classroom.js';

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */

export default function initializeRooms() {
  const arraySizes = [19, 20, 34];
  return arraySizes.map(size => new ClassRoom(size));
}
