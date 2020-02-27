//mentor note: #'s for ids, .'s for classes, make sure names MATCH!
$(function(){ 
  //LOOK AT FORM id=js-shopping-list-form
  $('#js-shopping-list-form').submit( event => {
      //STOP DEFAULT FORM SUBMIT
        //stop browser from default behavior to submit form to server
        //so input doesn't "disappear" after we hit "Add item"
      event.preventDefault();

      //MAKE NEW ITEM
        // retrieve text for new item user inputs in form
        // target input element w/ id=shopping-list-entry
        // now newItem will have the value (text) of wtv user inputs
      let newItem = $('#shopping-list-entry').val();

      //mentor note: clear the inputted text after we've submitted it! 
      $('#shopping-list-entry').val('');

      // add newly inputted item to the <ul> w/ class=shopping-list
      // use .append method; what is appendTo? How different?
      // make newly inputted item a <li> with check & delete buttons
      // have to add ``'s around the new <li> you want to append
        // or "" around each element and +'s inbt
      $('.shopping-list').append(
      `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`
      );
  });

  //MAKE CHECKED ITEMS CROSSED OUT
  //target all items under <ul> (class=shopping-list)
  //if check button clicked (class=shopping-list-toggle)
    //look at closest <li> [.closest()]
    //look at all item names/span's (class=shopping-item) [.find()]
    //change span class to class="shopping-item__checked"
      //like for milk
  //replace event.currentTarget with this (required)
  //.closest(): For each element in the set, get the first element 
    //that matches the selector by testing the element itself 
    //and traversing up through its ancestors in the DOM tree
  //.toggleClass: https://api.jquery.com/toggleclass/
    //syntax: put class name in ""s, no . before class name

  //Q: Why doesn't code below work, if I use "event => {...} instead of "function(event) {...}"?
  //   But it worked for the FORM portion above?

  //NTS: Cannot use .removeClass("shopping-item").addClass("shopping-item__checked")
  //     in place of toggleClass("shopping-item__checked") 
  //     B/C: You won't be able to uncheck the item
  //          It would stay permanently checked.

  $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
  });

  //DELETE ITEMS WHEN DELETE IS CLICKED 
  //target all items under <ul> (class=shopping-list)
  //if delete button clicked (class=shopping-item-delete)
    //look at closest <li> [.closest()]
    //remove the whole <li> (including check/delete buttons)
   $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
});