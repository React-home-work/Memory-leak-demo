function f() {
    var str = Array(10000).join('#');
    var foo = {
      name: 'foo'
    }
    function unused() {
      var message = 'it is only a test message';
      str = 'unused: ' + str;
    }
    function getData() {
      return 'data';
    }
    return getData;
  }

  var list = [];
  
  document.querySelector('#click_button').addEventListener('click', function () {
    list.push(f());
  }, false);