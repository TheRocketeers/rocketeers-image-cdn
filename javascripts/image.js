var img = $("<img />").attr('src', 'http://i.stack.imgur.com/J4lM7.png')
    .on('load', function() {
        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
            alert('broken image!');
        } else {
            $("#something").append(img);
        }
        });
