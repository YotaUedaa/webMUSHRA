/*************************************************************************
         (C) Copyright AudioLabs 2017 

This source code is protected by copyright law and international treaties. This source code is made available to You subject to the terms and conditions of the Software License for the webMUSHRA.js Software. Said terms and conditions have been made available to You prior to Your download of this source code. By downloading this source code You agree to be bound by the above mentionend terms and conditions, which can also be found here: https://www.audiolabs-erlangen.de/resources/webMUSHRA. Any unauthorised use of this source code may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under law. 

**************************************************************************/

function NESPageManager() {
  
}

NESPageManager.prototype.createPages = function (_pageManager, _pageTemplateRenderer, _pageConfig, _audioContext, _bufferSize, _audioFileLoader, _session, _errorHandler, _language) {
  //dummy
  for (var i = 0; i <  _pageConfig.dummy_len; ++i) {
    this.add = new Stimulus("dummy", _pageConfig.dummy + "/" + String(i) + "/add_stereo.wav");
    this.sub = new Stimulus("dummy", _pageConfig.dummy + "/" + String(i) + "/sub_stereo.wav");
    var page = new NESPage(this.add, this.sub, _pageManager, _pageTemplateRenderer, _audioContext, _bufferSize, _audioFileLoader, _session, _pageConfig, _errorHandler, _language);
    _pageManager.addPage(page);
  }  

  //task
  for (var i = 0; i <  _pageConfig.test_len; ++i) {
    var num = Math.floor(Math.random() * _pageConfig.stimuli_num);
    var r = Math.floor(Math.random() * _pageConfig.perturbation_num);
    var num_r = String(num) + "_" + String(r)
    this.add = new Stimulus(num_r, _pageConfig.stimuli + "/" + num_r + "/add.wav");
    this.sub = new Stimulus(num_r, _pageConfig.stimuli + "/" + num_r + "/sub.wav");
    var page = new NESPage(this.add, this.sub, _pageManager, _pageTemplateRenderer, _audioContext, _bufferSize, _audioFileLoader, _session, _pageConfig, _errorHandler, _language);
    _pageManager.addPage(page);
  }  
};
