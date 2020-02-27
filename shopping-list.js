$(function(){
    //LOOK AT FORM
    $('js-shopping-list-form').submit( event => {
        //STOP DEFAULT FORM SUBMIT
          //stop browser from default behavior to submit form to server
          //so input doesn't "disappear" after we hit "Add item"
        event.preventDefault();

        //MAKE NEW ITEM
          // retrieve text for new item user inputs in form
          // target input element w/ id=js-shopping-list-form
          // now newItem will have the value (text) of wtv user inputs
        let newItem = $('.js-shopping-list-entry').val();

        // add newly inputted item to the <ul> w/ class=shopping-list
        // use .append method; what is appendTo? How different?
        // make newly inputted item a <li> with check & delete buttons
        // have to add ``'s around the new <li> you want to append
          // or "" around each element and +'s inbt
        $('.shopping-list').append(
        `<li>
        <span class="shopping-item shopping-item__checked">${newItem}</span>
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
      //look at all span's (class=shopping-item) [.find()]
      //change span class to class="shopping-item_checked"
        //like for milk
    //replace event.currentTarget with this (required)
    //.closest(): For each element in the set, get the first element 
      //that matches the selector by testing the element itself 
      //and traversing up through its ancestors in the DOM tree
    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
      $(this).closest('li').find('.shopping-item').removeClass('shopping-item').addClass('shopping-item__checked');
    });

    //DELETE ITEMS WHEN DELETE IS CLICKED 
    //target all items under <ul> (class=shopping-list)
    //if delete button clicked (class=shopping-item-delete)
      //look at closest <li> [.closest()]
      //remove the whole <li>
    $('.shopping-list').on('click', '.shopping-item-delete', event => {
       $(this).closest('li').remove();
    });
});