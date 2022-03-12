/*************************************************************************
         (C) Copyright AudioLabs 2017 

This source code is protected by copyright law and international treaties. This source code is made available to You subject to the terms and conditions of the Software License for the webMUSHRA.js Software. Said terms and conditions have been made available to You prior to Your download of this source code. By downloading this source code You agree to be bound by the above mentionend terms and conditions, which can also be found here: https://www.audiolabs-erlangen.de/resources/webMUSHRA. Any unauthorised use of this source code may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under law. 

**************************************************************************/

function NESPageManager() {
  
}

NESPageManager.prototype.createPages = function (_pageManager, _pageTemplateRenderer, _pageConfig, _audioContext, _bufferSize, _audioFileLoader, _session, _errorHandler, _language) {
  this.add = []
  this.sub = [];
  for (var i = 0; i < _pageConfig.stimuli_num; ++i) {
    this.add[this.add.length] = new Stimulus("refference", _pageConfig.stimuli + String(i) + "/mono_c1.wav");
    this.sub[this.sub.length] = new Stimulus(i, _pageConfig.stimuli + String(i) + "/mono_c2.wav");
  }
  // this.reference = new Stimulus("reference", _pageConfig.reference);

  // for (var i = 0; i < this.conditions.length; ++i) {
  for (var i = 0; i < Math.min(this.add.length, _pageConfig.test_len); ++i) {
    num = Math.floor(Math.random() * this.add.length);
  	var page = new NESPage(this.add[num], this.sub[num], _pageManager, _pageTemplateRenderer, _audioContext, _bufferSize, _audioFileLoader, _session, _pageConfig, _errorHandler, _language);
  	_pageManager.addPage(page);
  }  
};
