/* @flow */

import type {Point} from '../../../shared/types';

import {Controller} from '../lib/Controller';

export class LinRegController extends Controller {
  getCost(): string {
    return this._getCost(
      this.params.theta0,
      this.params.theta1,
      this.params.Dataset
    ).toString();
  }

  _getCost(theta0: number, theta1: number, Dataset: Array<Point>): number {
    let cost = 0;
    for(let i = 0 ; i < Dataset.length ;i++) {
      cost += Math.pow((Dataset[i].x * theta1 + theta0 - Dataset[i].y), 2);
    }

    return cost / 2 / Dataset.length;
  }

  getBatchCost(): Object {
    return this.params.points.map(point => {
      return this._getCost(point.theta0, point.theta1, this.params.Dataset);
    });
  }
};
