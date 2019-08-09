Rails Forms & REST
==================

## SWBATs
- [x] Use path helpers and customize them.
- [x] Distinguish between `form_for` vs `form_tag` based on use case.
- [x] Understand the need for strong params & CSRF tokens.
- [x] Begin thinking about building a better UX - `link_to`, `button_to`, `button_tag`.
- [x] Create UI that allows the user to update and delete models
- [x] User partials to speed up the creation of views

Hats!
hat_type
color
size:integer
cool:boolean


## Outline


1. Basic setup
  - `rails g resource ModelName column:type`
  - RESTful routes via `resources`, `only`, `except`
2. Build out `index`, `show`, `delete`.
  - Path Helpers, `rails routes`, custom path helpers
  - `<a>` vs `link_to`, `method: HTTP_Verb`
  - `button_to` vs `button_tag`
3. Build out `new`, `create`, `edit`, `update`.
  - `form_for` vs `form_tag`
  - CSRF Token
  - strong params
4. Extra Stuff:
  - Abstraction! Partials, `before_action`
