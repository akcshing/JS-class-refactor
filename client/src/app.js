import InstrumentFamilies from './models/instrument_families';
import SelectView from './views/select_view';
import InstrumentFamilyView from './views/instrument_family_view';
import {instrumentFamiliesData} from './data/instrument_families';

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new SelectView(selectElement);
  familyDropdown.bindEvents();

  const familyContainer = document.querySelector('div#instrument-family');
  const instrumentFamilyView = new InstrumentFamilyView(familyContainer);
  instrumentFamilyView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamiliesData);
  instrumentFamilies.bindEvents();
});
