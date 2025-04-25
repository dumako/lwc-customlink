import { LightningElement, api } from "lwc";
import { sum } from "./sum";

export default class CustomLink extends LightningElement {
  _unitNumber = sum(2, 3);

  @api
  set unitNumber(value) {
    this._unitNumber = value;
  }

  get unitNumber() {
    return this._unitNumber;
  }

  handleChange(event) {
    this._unitNumber = event.target.value;
  }
}
