(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Initialize
 */
(function init() {
    /**
     * Set previewItems from selector
     * Check to see if previewItems is empty or undefined, if not
     * Loop through previewItems and add event listeners
     */

    //modal markup variables
    var modalWrapper = document.body,
        showModalClass = 'show-modal',
        closeButton = document.querySelector('#close'),
        modalImgContainer = document.querySelector('#modal-img'),
        modalDownloadBtn = document.querySelector('#preview-modal a');

    var previewItems = document.querySelectorAll('.preview');

    if (previewItems !== null) {
        //setup the preview button click handlers
        setUpPreviewButtons(previewItems, modalWrapper, modalImgContainer, modalDownloadBtn, showModalClass);
    };


    // * Check to see if #close is null
    if (closeButton !== null) {
        closeModalHandler(closeButton, modalWrapper, showModalClass);
    }

}());

/**
 * Setup our list of buttons with a the required click handlers
 */
function setUpPreviewButtons(previewItems, modalWrapper, modalImgContainer, modalDownload, showClass) {

    //button specific variables
    var buttonParentClass = '.button-list',
        buttonSiblingClass = '.getfile';

    //Loop through the buttons and attach the event listeners.
    for (var i = 0; i < previewItems.length; i++) {
        previewItems[i].addEventListener('click', showModal.bind(null, previewItems[i], modalImgContainer, modalWrapper, showClass), false);
        previewItems[i].addEventListener('click', getModalDownload.bind(null, previewItems[i], buttonParentClass, buttonSiblingClass, modalDownload), false);
    };
}

/**
 * Get Dom elements href value
 * Set href value to Dom element modalImg src
 * Add class 'show-modal' to body element
 * @param  {element} event [click]
 * @return {[type]}     [description]
 */
function showModal(button, modalImgContainer, modalWrapper, showClass, event) {

    event.preventDefault();

    // Get element.href's value and set it to be modalImg's src value
    modalImgContainer.setAttribute('src', button.href);

    // Show modal by adding class to body
    modalWrapper.classList.add(showClass);
};

/**
 * Gets and set download src for each click event that is fired by:
 * @param  {element} event [click]
 * @return {[type]} [description]
 */
function getModalDownload(button, buttonParentClass, siblingDownloadClass, modalDownload) {
    // pass element into function and find nearest parent with classname 'button-list'
    // assign to variable
    var parent = getParents(button, buttonParentClass);
    // Find all children of the parent element with the class name 'getfile'
    // get child's href value
    // assign to variable
    // NOTE: What happends when there's more than one element with the classname 'getfile'
    var downloadHref = parent[0].querySelector(siblingDownloadClass).href;

    // Set element modalDownload's href value to downloadHref
    modalDownload.setAttribute('href', downloadHref);
}

/**
 * Close Preview Modal
 */
function closeModalHandler(closeButton, modalWrapper, showClass) {
    // NOTE: Do I need this EventListener? Maybe there is another way toggle this class in my showModal function
    closeButton.addEventListener('click', closeModal.bind(null, modalWrapper, showClass));
}

/**
 * Close the modal.  Removes the show-modal class from the element passed to it.
 */
function closeModal(el, showClass){
    // Remove class name 'show-modal' from body classList
    el.classList.remove(showClass);
}

/**
 * Get all DOM element up the tree that contain a class, ID, or data attribute
 * @param  {Node} elem The base element
 * @param  {String} selector The class, id, data attribute, or tag to look for
 * @return {Array} Null if no match
*/
function getParents(elem, selector) {

      var parents = [];
      var firstChar;
      if ( selector ) {
          firstChar = selector.charAt(0);
      }

      // Get matches
      for ( ; elem && elem !== document; elem = elem.parentNode ) {
          if ( selector ) {

              // If selector is a class
              if ( firstChar === '.' ) {
                  if ( elem.classList.contains( selector.substr(1) ) ) {
                      parents.push( elem );
                  }
              }

              // If selector is an ID
              if ( firstChar === '#' ) {
                  if ( elem.id === selector.substr(1) ) {
                      parents.push( elem );
                  }
              }

              // If selector is a data attribute
              if ( firstChar === '[' ) {
                  if ( elem.hasAttribute( selector.substr(1, selector.length - 1) ) ) {
                      parents.push( elem );
                  }
              }

              // If selector is a tag
              if ( elem.tagName.toLowerCase() === selector ) {
                  parents.push( elem );
              }

          } else {
              parents.push( elem );
          }

      }

      // Return parents if any exist
      if ( parents.length === 0 ) {
          return null;
      } else {
          return parents;
      }

  };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogSW5pdGlhbGl6ZVxuICovXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvKipcbiAgICAgKiBTZXQgcHJldmlld0l0ZW1zIGZyb20gc2VsZWN0b3JcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgcHJldmlld0l0ZW1zIGlzIGVtcHR5IG9yIHVuZGVmaW5lZCwgaWYgbm90XG4gICAgICogTG9vcCB0aHJvdWdoIHByZXZpZXdJdGVtcyBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuXG4gICAgLy9tb2RhbCBtYXJrdXAgdmFyaWFibGVzXG4gICAgdmFyIG1vZGFsV3JhcHBlciA9IGRvY3VtZW50LmJvZHksXG4gICAgICAgIHNob3dNb2RhbENsYXNzID0gJ3Nob3ctbW9kYWwnLFxuICAgICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpLFxuICAgICAgICBtb2RhbEltZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1pbWcnKSxcbiAgICAgICAgbW9kYWxEb3dubG9hZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2aWV3LW1vZGFsIGEnKTtcblxuICAgIHZhciBwcmV2aWV3SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldycpO1xuXG4gICAgaWYgKHByZXZpZXdJdGVtcyAhPT0gbnVsbCkge1xuICAgICAgICAvL3NldHVwIHRoZSBwcmV2aWV3IGJ1dHRvbiBjbGljayBoYW5kbGVyc1xuICAgICAgICBzZXRVcFByZXZpZXdCdXR0b25zKHByZXZpZXdJdGVtcywgbW9kYWxXcmFwcGVyLCBtb2RhbEltZ0NvbnRhaW5lciwgbW9kYWxEb3dubG9hZEJ0biwgc2hvd01vZGFsQ2xhc3MpO1xuICAgIH07XG5cblxuICAgIC8vICogQ2hlY2sgdG8gc2VlIGlmICNjbG9zZSBpcyBudWxsXG4gICAgaWYgKGNsb3NlQnV0dG9uICE9PSBudWxsKSB7XG4gICAgICAgIGNsb3NlTW9kYWxIYW5kbGVyKGNsb3NlQnV0dG9uLCBtb2RhbFdyYXBwZXIsIHNob3dNb2RhbENsYXNzKTtcbiAgICB9XG5cbn0oKSk7XG5cbi8qKlxuICogU2V0dXAgb3VyIGxpc3Qgb2YgYnV0dG9ucyB3aXRoIGEgdGhlIHJlcXVpcmVkIGNsaWNrIGhhbmRsZXJzXG4gKi9cbmZ1bmN0aW9uIHNldFVwUHJldmlld0J1dHRvbnMocHJldmlld0l0ZW1zLCBtb2RhbFdyYXBwZXIsIG1vZGFsSW1nQ29udGFpbmVyLCBtb2RhbERvd25sb2FkLCBzaG93Q2xhc3MpIHtcblxuICAgIC8vYnV0dG9uIHNwZWNpZmljIHZhcmlhYmxlc1xuICAgIHZhciBidXR0b25QYXJlbnRDbGFzcyA9ICcuYnV0dG9uLWxpc3QnLFxuICAgICAgICBidXR0b25TaWJsaW5nQ2xhc3MgPSAnLmdldGZpbGUnO1xuXG4gICAgLy9Mb29wIHRocm91Z2ggdGhlIGJ1dHRvbnMgYW5kIGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJldmlld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByZXZpZXdJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbC5iaW5kKG51bGwsIHByZXZpZXdJdGVtc1tpXSwgbW9kYWxJbWdDb250YWluZXIsIG1vZGFsV3JhcHBlciwgc2hvd0NsYXNzKSwgZmFsc2UpO1xuICAgICAgICBwcmV2aWV3SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRNb2RhbERvd25sb2FkLmJpbmQobnVsbCwgcHJldmlld0l0ZW1zW2ldLCBidXR0b25QYXJlbnRDbGFzcywgYnV0dG9uU2libGluZ0NsYXNzLCBtb2RhbERvd25sb2FkKSwgZmFsc2UpO1xuICAgIH07XG59XG5cbi8qKlxuICogR2V0IERvbSBlbGVtZW50cyBocmVmIHZhbHVlXG4gKiBTZXQgaHJlZiB2YWx1ZSB0byBEb20gZWxlbWVudCBtb2RhbEltZyBzcmNcbiAqIEFkZCBjbGFzcyAnc2hvdy1tb2RhbCcgdG8gYm9keSBlbGVtZW50XG4gKiBAcGFyYW0gIHtlbGVtZW50fSBldmVudCBbY2xpY2tdXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICBbZGVzY3JpcHRpb25dXG4gKi9cbmZ1bmN0aW9uIHNob3dNb2RhbChidXR0b24sIG1vZGFsSW1nQ29udGFpbmVyLCBtb2RhbFdyYXBwZXIsIHNob3dDbGFzcywgZXZlbnQpIHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBHZXQgZWxlbWVudC5ocmVmJ3MgdmFsdWUgYW5kIHNldCBpdCB0byBiZSBtb2RhbEltZydzIHNyYyB2YWx1ZVxuICAgIG1vZGFsSW1nQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3JjJywgYnV0dG9uLmhyZWYpO1xuXG4gICAgLy8gU2hvdyBtb2RhbCBieSBhZGRpbmcgY2xhc3MgdG8gYm9keVxuICAgIG1vZGFsV3JhcHBlci5jbGFzc0xpc3QuYWRkKHNob3dDbGFzcyk7XG59O1xuXG4vKipcbiAqIEdldHMgYW5kIHNldCBkb3dubG9hZCBzcmMgZm9yIGVhY2ggY2xpY2sgZXZlbnQgdGhhdCBpcyBmaXJlZCBieTpcbiAqIEBwYXJhbSAge2VsZW1lbnR9IGV2ZW50IFtjbGlja11cbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBnZXRNb2RhbERvd25sb2FkKGJ1dHRvbiwgYnV0dG9uUGFyZW50Q2xhc3MsIHNpYmxpbmdEb3dubG9hZENsYXNzLCBtb2RhbERvd25sb2FkKSB7XG4gICAgLy8gcGFzcyBlbGVtZW50IGludG8gZnVuY3Rpb24gYW5kIGZpbmQgbmVhcmVzdCBwYXJlbnQgd2l0aCBjbGFzc25hbWUgJ2J1dHRvbi1saXN0J1xuICAgIC8vIGFzc2lnbiB0byB2YXJpYWJsZVxuICAgIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRzKGJ1dHRvbiwgYnV0dG9uUGFyZW50Q2xhc3MpO1xuICAgIC8vIEZpbmQgYWxsIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBjbGFzcyBuYW1lICdnZXRmaWxlJ1xuICAgIC8vIGdldCBjaGlsZCdzIGhyZWYgdmFsdWVcbiAgICAvLyBhc3NpZ24gdG8gdmFyaWFibGVcbiAgICAvLyBOT1RFOiBXaGF0IGhhcHBlbmRzIHdoZW4gdGhlcmUncyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3NuYW1lICdnZXRmaWxlJ1xuICAgIHZhciBkb3dubG9hZEhyZWYgPSBwYXJlbnRbMF0ucXVlcnlTZWxlY3RvcihzaWJsaW5nRG93bmxvYWRDbGFzcykuaHJlZjtcblxuICAgIC8vIFNldCBlbGVtZW50IG1vZGFsRG93bmxvYWQncyBocmVmIHZhbHVlIHRvIGRvd25sb2FkSHJlZlxuICAgIG1vZGFsRG93bmxvYWQuc2V0QXR0cmlidXRlKCdocmVmJywgZG93bmxvYWRIcmVmKTtcbn1cblxuLyoqXG4gKiBDbG9zZSBQcmV2aWV3IE1vZGFsXG4gKi9cbmZ1bmN0aW9uIGNsb3NlTW9kYWxIYW5kbGVyKGNsb3NlQnV0dG9uLCBtb2RhbFdyYXBwZXIsIHNob3dDbGFzcykge1xuICAgIC8vIE5PVEU6IERvIEkgbmVlZCB0aGlzIEV2ZW50TGlzdGVuZXI/IE1heWJlIHRoZXJlIGlzIGFub3RoZXIgd2F5IHRvZ2dsZSB0aGlzIGNsYXNzIGluIG15IHNob3dNb2RhbCBmdW5jdGlvblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbC5iaW5kKG51bGwsIG1vZGFsV3JhcHBlciwgc2hvd0NsYXNzKSk7XG59XG5cbi8qKlxuICogQ2xvc2UgdGhlIG1vZGFsLiAgUmVtb3ZlcyB0aGUgc2hvdy1tb2RhbCBjbGFzcyBmcm9tIHRoZSBlbGVtZW50IHBhc3NlZCB0byBpdC5cbiAqL1xuZnVuY3Rpb24gY2xvc2VNb2RhbChlbCwgc2hvd0NsYXNzKXtcbiAgICAvLyBSZW1vdmUgY2xhc3MgbmFtZSAnc2hvdy1tb2RhbCcgZnJvbSBib2R5IGNsYXNzTGlzdFxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoc2hvd0NsYXNzKTtcbn1cblxuLyoqXG4gKiBHZXQgYWxsIERPTSBlbGVtZW50IHVwIHRoZSB0cmVlIHRoYXQgY29udGFpbiBhIGNsYXNzLCBJRCwgb3IgZGF0YSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSAge05vZGV9IGVsZW0gVGhlIGJhc2UgZWxlbWVudFxuICogQHBhcmFtICB7U3RyaW5nfSBzZWxlY3RvciBUaGUgY2xhc3MsIGlkLCBkYXRhIGF0dHJpYnV0ZSwgb3IgdGFnIHRvIGxvb2sgZm9yXG4gKiBAcmV0dXJuIHtBcnJheX0gTnVsbCBpZiBubyBtYXRjaFxuKi9cbmZ1bmN0aW9uIGdldFBhcmVudHMoZWxlbSwgc2VsZWN0b3IpIHtcblxuICAgICAgdmFyIHBhcmVudHMgPSBbXTtcbiAgICAgIHZhciBmaXJzdENoYXI7XG4gICAgICBpZiAoIHNlbGVjdG9yICkge1xuICAgICAgICAgIGZpcnN0Q2hhciA9IHNlbGVjdG9yLmNoYXJBdCgwKTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IG1hdGNoZXNcbiAgICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgICBpZiAoIHNlbGVjdG9yICkge1xuXG4gICAgICAgICAgICAgIC8vIElmIHNlbGVjdG9yIGlzIGEgY2xhc3NcbiAgICAgICAgICAgICAgaWYgKCBmaXJzdENoYXIgPT09ICcuJyApIHtcbiAgICAgICAgICAgICAgICAgIGlmICggZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoIHNlbGVjdG9yLnN1YnN0cigxKSApICkge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYW4gSURcbiAgICAgICAgICAgICAgaWYgKCBmaXJzdENoYXIgPT09ICcjJyApIHtcbiAgICAgICAgICAgICAgICAgIGlmICggZWxlbS5pZCA9PT0gc2VsZWN0b3Iuc3Vic3RyKDEpICkge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gSWYgc2VsZWN0b3IgaXMgYSBkYXRhIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICBpZiAoIGZpcnN0Q2hhciA9PT0gJ1snICkge1xuICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtLmhhc0F0dHJpYnV0ZSggc2VsZWN0b3Iuc3Vic3RyKDEsIHNlbGVjdG9yLmxlbmd0aCAtIDEpICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKCBlbGVtICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZiBzZWxlY3RvciBpcyBhIHRhZ1xuICAgICAgICAgICAgICBpZiAoIGVsZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvciApIHtcbiAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goIGVsZW0gKTtcbiAgICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHBhcmVudHMgaWYgYW55IGV4aXN0XG4gICAgICBpZiAoIHBhcmVudHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgIH1cblxuICB9O1xuIl19
