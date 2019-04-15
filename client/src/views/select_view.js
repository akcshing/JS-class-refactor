import {PubSub} from '../helpers/pub_sub.js';

export default class SelectView {
  constructor(element){
    this.element = element;
  }

  populate(instrumentFamilyData) {
    instrumentFamilyData.forEach((familiy, index) => {
      const option = document.createElement('option');
      option.textContent = familiy.name;
      option.value = index;
      this.element.appendChild(option);
    });
  };

  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
      const allInstrumentFamilies = evt.detail;
      console.log("here");
      this.populate(allInstrumentFamilies);
    });

    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    });
  };



};
