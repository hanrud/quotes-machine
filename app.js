$(document).ready(function() {

  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author) {
          $('#author').text('said by ' + author);
        } else {
          $('#author').text('unknown');
        }
      }
    });
  }

  getNewQuote();

  $('.get-quote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
  });

  $('.twitt').on('click', function(event) {
    console.log('twitt');
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + quote + ' - ' + author, null, 'height=420,width=550,status=yes,toolbar=no,menubar=no,location=no');
  })
});
