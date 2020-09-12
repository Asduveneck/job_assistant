#!/usr/bin/env bash

EX_STR='EXAMPLES: 
  FRONTEND    
      s/run lint front
      s/run lint f
      s/run lint front-fix
      s/run lint front-f
      s/run lint f-fix
      s/run lint f-f
  --------------------------------------------------
  SERVER    
      s/run lint server
      s/run lint s
      s/run lint server-fix
      s/run lint server-f
      s/run lint s-fix
      s/run lint s-f

'

HELP_STR='
    This is a helper file to run `npm run lint` or `npm run lint-fix` on either the client (frontend) or server.

    To access the frontend, you call front or f.
    To access the server, you call server or s.
    
    If you want to invoke a quick auto fix, you add a suffix of `f` or `-fix`

    To see examples, please invoke `s/run lint ex` or `s/run lint examples`
    '

case $1 in

  examples | ex)
    echo "$EX_STR"
    ;;

  front | f)
    cd client && npm run lint
    ;;

  server | s)
    cd server && npm run lint
    ;;

  front-fix | front-f | f-fix | f-f)
    cd client && npm run lint-fix
    ;;

  server-fix | server-f | s-fix | s-f)
    cd server && npm run lint-fix
    ;;
  
  help | h)
    echo "$HELP_STR"
    ;;
  *)
    echo 'Please provide a valid argument.'
    echo 'To get help, call: `s/run lint help` or `s/run lint h`'
    echo 'To see examples, call: `s/run lint examples` or `s/run lint ex`'
    ;;
esac