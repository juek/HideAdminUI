/*
######################################################
JS/jQuery for for Typesetter CMS addon 'Hide Admin UI'
Author: J. Krausz
Date: 2018-01-14
Version 1.0
######################################################
*/

$(function(){
  HideAdminUI.init();
});


var HideAdminUI = {

  auto    : 992, // auto-hides UI when viewport width is less than this value, use 0 or false to disable

  init    : function(){
              $('<div class="hidden-admin-ui-indicator" title="[Ctrl]+[H]"></div>')
                .on('click', HideAdminUI.show)
                  .appendTo('body');

              $(document).on('keydown', function(e){
                if( e.which == 27 ){ // [ESC]
                  HideAdminUI.show();
                }
                if( e.ctrlKey && e.which == 72 ){ // [Ctrl] + [H] --> use http://keycode.info to customize
                  HideAdminUI.toggle();
                  e.preventDefault();  // prevents default browser shortcut (history panel), comment line to allow
                  e.stopPropagation(); // prevents default browser shortcut (history panel), comment line to allow
                }
              });

              if( HideAdminUI.auto && $.isNumeric(HideAdminUI.auto) ){
                $(window).on('load resize', function(e){
                  var ww = $(window).width();
                  if( ww <= HideAdminUI.auto ){
                    HideAdminUI.hide();
                  }else{
                    HideAdminUI.show();
                  }
                });
              }
            },

  toggle  : function(){
              $('html:not(.edit_layout):not(.admin_body)').toggleClass('override_admin_style');
            },

  show    : function(){
              $('html:not(.edit_layout):not(.admin_body)').removeClass('override_admin_style');
            },

  hide    : function(){
              $('html:not(.edit_layout):not(.admin_body)').addClass('override_admin_style');
            }
};
