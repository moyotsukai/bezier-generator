import { translatePath } from './translatePath'
import { getEndAnchor } from './getEndAnchor'
import { mirrorPath } from './mirrorPath'
import { rotatePath } from './rotatePath'
import { BezierPoints } from './BezierPoints'
import { BezierVec2 } from './BezierVec2'

export class BezierSpline {
  private _paths: BezierPoints[]

  constructor(paths: BezierPoints[]) {
    this._paths = paths
  }

  get paths(): BezierPoints[] {
    return this._paths
  }

  get endAnchor(): BezierVec2 {
    return getEndAnchor(this._paths)
  }

  public rotate({ center, angle }: { center: BezierVec2, angle: number }): BezierSpline {
    return new BezierSpline(rotatePath({ center: center, angle: angle, path: this._paths }))
  }

  public mirror({ center, angle }: { center: BezierVec2, angle: number }): BezierSpline {
    return new BezierSpline(mirrorPath({ center: center, angle: angle, path: this._paths }))
  }

  public translate({ angle, distance }: { angle: number, distance: number }): BezierSpline {
    return new BezierSpline(translatePath({ angle: angle, distance: distance, path: this._paths }))
  }

}