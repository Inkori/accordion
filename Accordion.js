(function(){
  
  var defAccordionType = 'horizontal';
  $('<h1></h1>',{
    text: 'CSS3 Accordion'
  }).appendTo('body');
  
  $('<button data-accordion = "horizontal">horizontal</button>').appendTo('body');
  $('<button data-accordion = "vertical">vertical</button>').appendTo('body');
  
  $('<div class="accordion '+defAccordionType+'"></div>').appendTo('body');
  
  $('button[data-accordion = '+defAccordionType+']').attr("disabled", "disabled");
  
  $('button').on("click", function(){
    var $this = $(this),
        type = $this.data('accordion');
        
    $('.accordion')
    .removeClass($this.siblings("button").data('accordion'))
    .addClass(type);
    
    $this
      .siblings("button")
      .removeAttr("disabled")
      .end()
      .attr("disabled", "disabled");
  });
  
  createAccordion();
  
  function createAccordion(){
    var accordionInfo = [
	{ "name" : "About Us",
	  "id" : "about" },
	{ "name" : "Services",
	  "id" : "services"	},
	{ "name" : "Blog",
	  "id" : "blog"	},
	{ "name" : "Portfolio",
	  "id" : "portfolio" },
	{ "name" : "Contact",
	  "id" : "contact" }];

    for(var i = 0; i<accordionInfo.length; i++){
      var id = accordionInfo[i].id,
          name = accordionInfo[i].name,
          text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Maecenas elit quam, egestas eget placerat non, fringilla vel eros. Nam vehicula elementum nulla sed consequat. Phasellus eu erat enim. Praesent at magna non massa dapibus scelerisque in eu lorem.';
  
      $('<section></section>',{
        id: id
      })
      .prepend('<h2><a href="#'+id+'">'+name+'</a></h2>')
      .append('<p>'+text+'</p>')
      .prependTo('.accordion');

    }
  
  }

})();