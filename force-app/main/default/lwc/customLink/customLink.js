import { LightningElement, api } from "lwc";
import { sum } from "./sum";

export default class CustomLink extends LightningElement {
  @api unitNumber = sum(2, 3);
}
