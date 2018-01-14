<?php
/*
##################################################
PHP class for Typesetter CMS addon 'Hide Admin UI'
Author: J. Krausz
Date: 2018-01-14
Version 1.0
##################################################
*/

defined('is_running') or die('Not an entry point...');

class HideAdminUI{

  public static function GetHead() {
    global $page, $addonRelativeCode;
    if( \gp\tool::LoggedIn() && $page->title ){
      $page->css_admin[] =  $addonRelativeCode . '/HideAdminUI.css';
      $page->head_js[] =    $addonRelativeCode . '/HideAdminUI.js';
    }
  }

}
