import { Coordinate } from './Coordinate.type'

export type BezierPath = {
  m: Coordinate
  c: [Coordinate, Coordinate, Coordinate]
  // s?: [Coordinate, Coordinate]
}
