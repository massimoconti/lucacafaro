(function(){
  C = {
    // Number of days before the cookie expires, and the banner reappears
    cookieDuration : 365,

    // Name of our cookie
    cookieName: 'complianceCookie',

    // Value of cookie
    cookieValue: 'on',

    // Message banner message
    bannerMessage: "Questo sito fa uso di cookie. Cliccando \"Accetto\" o continuando la navigazione ne acconsenti l'utilizzo",

    // Message banner dismiss button
    bannerButton: "Accetto",

    // Link to your cookie policy.
    bannerLinkURL: "cookies.html",

    // Link text
    bannerLinkText: "Informativa",

    createDiv: function () {
        var banner = $(
            '<div id="cookielaw" class="alert alert-success alert-dismissible text-center fade in" ' +
            'role="alert" style="position: fixed; bottom: 0; width: 100%; ' +
            'margin-bottom: 0; padding:20px; background: rgba(211,211,211,0.5);"> ' +
            this.bannerMessage + ' <a href="' + this.bannerLinkURL + '">' +
            this.bannerLinkText + '</a> <button type="button" class="btn btn-success btn-xs" onclick="C.createCookie(C.cookieName, C.cookieValue' +
            ', C.cookieDuration); C.dismissDiv()" data-dismiss="alert" aria-label="Close">' +
            this.bannerButton + '</button></div>'
        )
        $("body").append(banner)
    },

    dismissDiv: function(){
      $("#cookielaw").hide();
    },

    createCookie: function(name, value, days) {
        //console.log("Create cookie")
        var expires = ""
        if (days) {
            var date = new Date()
            date.setTime(date.getTime() + (days*24*60*60*1000))
            expires = "; expires=" + date.toGMTString()
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    checkCookie: function(name) {
        var nameEQ = name + "="
        var ca = document.cookie.split(';')
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0)==' ')
                c = c.substring(1, c.length)
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length)
        }
        return null
    },

    init: function() {
      if (this.checkCookie(this.cookieName) != this.cookieValue)
        this.createDiv()
    }
  }

  $(document).ready(function() {
      C.init()
  })
})();
