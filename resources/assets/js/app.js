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
