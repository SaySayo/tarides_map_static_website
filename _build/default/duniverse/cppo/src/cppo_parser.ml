type token =
  | DEF of ( Cppo_types.loc * string )
  | DEFUN of ( Cppo_types.loc * string )
  | UNDEF of ( Cppo_types.loc * string )
  | INCLUDE of ( Cppo_types.loc * string )
  | WARNING of ( Cppo_types.loc * string )
  | ERROR of ( Cppo_types.loc * string )
  | LINE of ( Cppo_types.loc * string option * int )
  | IFDEF of ( Cppo_types.loc * Cppo_types.bool_expr )
  | EXT of ( Cppo_types.loc * string * string )
  | ENDEF of ( Cppo_types.loc )
  | IF of ( Cppo_types.loc )
  | ELIF of ( Cppo_types.loc )
  | ELSE of ( Cppo_types.loc )
  | ENDIF of ( Cppo_types.loc )
  | ENDTEST of ( Cppo_types.loc )
  | TRUE
  | FALSE
  | DEFINED
  | NOT
  | AND
  | OR
  | EQ
  | LT
  | GT
  | NE
  | LE
  | GE
  | PLUS
  | MINUS
  | STAR
  | LNOT
  | LSL
  | LSR
  | ASR
  | LAND
  | LOR
  | LXOR
  | OP_PAREN of ( Cppo_types.loc )
  | SLASH of ( Cppo_types.loc )
  | MOD of ( Cppo_types.loc )
  | INT of ( int64 )
  | CL_PAREN of ( Cppo_types.loc )
  | COMMA of ( Cppo_types.loc )
  | CURRENT_LINE of ( Cppo_types.loc )
  | CURRENT_FILE of ( Cppo_types.loc )
  | IDENT of ( Cppo_types.loc * string )
  | FUNIDENT of ( Cppo_types.loc * string )
  | TEXT of ( Cppo_types.loc * bool * string )
  | EOF

open Parsing;;
let _ = parse_error;;
# 2 "duniverse/cppo/src/cppo_parser.mly"
  open Cppo_types
# 57 "duniverse/cppo/src/cppo_parser.ml"
let yytransl_const = [|
  272 (* TRUE *);
  273 (* FALSE *);
  274 (* DEFINED *);
  275 (* NOT *);
  276 (* AND *);
  277 (* OR *);
  278 (* EQ *);
  279 (* LT *);
  280 (* GT *);
  281 (* NE *);
  282 (* LE *);
  283 (* GE *);
  284 (* PLUS *);
  285 (* MINUS *);
  286 (* STAR *);
  287 (* LNOT *);
  288 (* LSL *);
  289 (* LSR *);
  290 (* ASR *);
  291 (* LAND *);
  292 (* LOR *);
  293 (* LXOR *);
    0 (* EOF *);
    0|]

let yytransl_block = [|
  257 (* DEF *);
  258 (* DEFUN *);
  259 (* UNDEF *);
  260 (* INCLUDE *);
  261 (* WARNING *);
  262 (* ERROR *);
  263 (* LINE *);
  264 (* IFDEF *);
  265 (* EXT *);
  266 (* ENDEF *);
  267 (* IF *);
  268 (* ELIF *);
  269 (* ELSE *);
  270 (* ENDIF *);
  271 (* ENDTEST *);
  294 (* OP_PAREN *);
  295 (* SLASH *);
  296 (* MOD *);
  297 (* INT *);
  298 (* CL_PAREN *);
  299 (* COMMA *);
  300 (* CURRENT_LINE *);
  301 (* CURRENT_FILE *);
  302 (* IDENT *);
  303 (* FUNIDENT *);
  304 (* TEXT *);
    0|]

let yylhs = "\255\255\
\001\000\001\000\003\000\003\000\004\000\004\000\002\000\002\000\
\002\000\002\000\005\000\005\000\006\000\006\000\006\000\006\000\
\006\000\006\000\006\000\006\000\006\000\006\000\006\000\006\000\
\006\000\006\000\006\000\006\000\006\000\006\000\006\000\011\000\
\011\000\011\000\008\000\008\000\007\000\007\000\007\000\009\000\
\009\000\012\000\012\000\010\000\013\000\013\000\013\000\013\000\
\013\000\013\000\013\000\013\000\013\000\013\000\013\000\013\000\
\013\000\014\000\014\000\014\000\014\000\014\000\014\000\014\000\
\014\000\014\000\014\000\014\000\014\000\014\000\014\000\014\000\
\014\000\015\000\015\000\000\000"

let yylen = "\002\000\
\002\000\001\000\002\000\000\000\002\000\000\000\001\000\001\000\
\001\000\001\000\001\000\003\000\001\000\001\000\003\000\002\000\
\001\000\001\000\003\000\005\000\002\000\001\000\001\000\001\000\
\001\000\001\000\005\000\005\000\004\000\004\000\001\000\004\000\
\002\000\000\000\003\000\001\000\002\000\002\000\000\000\004\000\
\002\000\002\000\000\000\002\000\001\000\001\000\002\000\003\000\
\002\000\003\000\003\000\003\000\003\000\003\000\003\000\003\000\
\003\000\001\000\001\000\003\000\003\000\003\000\003\000\003\000\
\003\000\003\000\003\000\003\000\003\000\003\000\003\000\002\000\
\002\000\003\000\001\000\002\000"

let yydefred = "\000\000\
\000\000\000\000\000\000\000\000\022\000\025\000\023\000\024\000\
\031\000\000\000\026\000\000\000\008\000\009\000\010\000\017\000\
\018\000\014\000\000\000\013\000\002\000\076\000\000\000\007\000\
\000\000\000\000\021\000\000\000\000\000\000\000\000\000\045\000\
\046\000\000\000\000\000\000\000\000\000\000\000\058\000\059\000\
\000\000\000\000\000\000\016\000\000\000\000\000\000\000\011\000\
\000\000\001\000\003\000\019\000\042\000\000\000\000\000\000\000\
\000\000\000\000\047\000\049\000\000\000\073\000\072\000\000\000\
\000\000\000\000\000\000\044\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\005\000\015\000\000\000\000\000\000\000\
\033\000\030\000\029\000\000\000\048\000\000\000\060\000\000\000\
\050\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\066\000\067\000\068\000\069\000\070\000\
\071\000\000\000\065\000\038\000\037\000\012\000\035\000\020\000\
\040\000\000\000\074\000\028\000\027\000\032\000"

let yydgoto = "\002\000\
\022\000\025\000\026\000\046\000\047\000\024\000\090\000\049\000\
\029\000\041\000\058\000\030\000\042\000\043\000\066\000"

let yysindex = "\011\000\
\001\000\000\000\098\255\227\254\000\000\000\000\000\000\000\000\
\000\000\098\255\000\000\132\255\000\000\000\000\000\000\000\000\
\000\000\000\000\087\255\000\000\000\000\000\000\001\000\000\000\
\098\255\033\255\000\000\025\255\043\255\073\255\252\254\000\000\
\000\000\078\255\132\255\062\000\062\000\132\255\000\000\000\000\
\098\255\106\255\050\000\000\000\109\255\095\255\031\255\000\000\
\088\255\000\000\000\000\000\000\000\000\098\255\096\255\132\255\
\098\255\070\255\000\000\000\000\062\000\000\000\000\000\239\254\
\028\000\116\255\252\254\000\000\132\255\132\255\062\000\062\000\
\062\000\062\000\062\000\062\000\062\000\062\000\062\000\062\000\
\062\000\062\000\062\000\062\000\062\000\062\000\062\000\109\255\
\109\255\117\255\031\255\000\000\000\000\150\255\025\255\098\255\
\000\000\000\000\000\000\077\000\000\000\062\000\000\000\083\255\
\000\000\142\255\093\000\093\000\093\000\093\000\093\000\093\000\
\104\000\104\000\252\255\000\000\000\000\000\000\000\000\000\000\
\000\000\252\255\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\252\254\000\000\000\000\000\000\000\000"

let yyrindex = "\000\000\
\000\000\000\000\154\255\119\255\000\000\000\000\000\000\000\000\
\000\000\241\255\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\038\255\000\000\000\000\000\000\000\000\000\000\
\010\255\000\000\000\000\119\255\000\000\000\000\108\255\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\241\255\000\000\000\000\000\000\125\255\126\255\038\255\000\000\
\000\000\000\000\000\000\000\000\000\000\154\255\127\255\000\000\
\123\255\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\133\255\000\000\108\255\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\000\000\000\000\000\000\000\000\000\000\000\000\125\255\
\125\255\000\000\038\255\000\000\000\000\000\000\119\255\241\255\
\000\000\000\000\000\000\133\255\000\000\000\000\000\000\000\000\
\000\000\176\255\006\255\151\255\175\255\200\255\225\255\228\255\
\209\255\254\255\159\255\000\000\000\000\000\000\000\000\000\000\
\000\000\184\255\000\000\000\000\000\000\000\000\000\000\000\000\
\000\000\108\255\000\000\000\000\000\000\000\000"

let yygindex = "\000\000\
\153\000\006\000\246\255\130\000\217\255\239\255\040\000\101\000\
\099\000\144\000\194\255\175\000\232\255\236\255\114\000"

let yytablesize = 400
let yytable = "\031\000\
\021\000\048\000\069\000\070\000\104\000\089\000\023\000\056\000\
\057\000\004\000\060\000\001\000\027\000\064\000\051\000\062\000\
\063\000\065\000\028\000\004\000\052\000\004\000\004\000\004\000\
\101\000\052\000\052\000\048\000\023\000\048\000\067\000\003\000\
\004\000\005\000\006\000\007\000\008\000\009\000\010\000\011\000\
\100\000\012\000\052\000\094\000\105\000\106\000\097\000\052\000\
\089\000\089\000\107\000\108\000\109\000\110\000\111\000\112\000\
\113\000\114\000\115\000\116\000\117\000\118\000\119\000\120\000\
\121\000\122\000\123\000\134\000\045\000\098\000\048\000\048\000\
\028\000\048\000\016\000\017\000\018\000\019\000\020\000\006\000\
\006\000\100\000\132\000\099\000\054\000\130\000\044\000\003\000\
\004\000\005\000\006\000\007\000\008\000\009\000\010\000\011\000\
\133\000\012\000\003\000\004\000\005\000\006\000\007\000\008\000\
\009\000\010\000\011\000\034\000\012\000\003\000\004\000\005\000\
\006\000\007\000\008\000\009\000\010\000\011\000\055\000\012\000\
\068\000\034\000\004\000\059\000\045\000\069\000\070\000\124\000\
\125\000\093\000\016\000\017\000\018\000\019\000\020\000\013\000\
\004\000\091\000\095\000\014\000\015\000\016\000\017\000\018\000\
\019\000\020\000\045\000\032\000\033\000\034\000\035\000\088\000\
\016\000\017\000\018\000\019\000\020\000\103\000\126\000\128\000\
\036\000\069\000\037\000\004\000\043\000\053\000\039\000\036\000\
\041\000\038\000\053\000\053\000\039\000\063\000\075\000\050\000\
\092\000\040\000\063\000\063\000\063\000\063\000\063\000\063\000\
\063\000\063\000\063\000\063\000\063\000\054\000\051\000\127\000\
\053\000\129\000\054\000\054\000\051\000\063\000\064\000\096\000\
\063\000\063\000\053\000\064\000\064\000\064\000\064\000\064\000\
\064\000\064\000\064\000\064\000\064\000\064\000\055\000\131\000\
\054\000\051\000\000\000\055\000\055\000\000\000\064\000\061\000\
\000\000\064\000\064\000\000\000\061\000\061\000\061\000\061\000\
\061\000\061\000\061\000\061\000\061\000\061\000\000\000\056\000\
\004\000\055\000\057\000\000\000\056\000\056\000\000\000\057\000\
\057\000\000\000\061\000\061\000\004\000\004\000\004\000\000\000\
\000\000\003\000\004\000\005\000\006\000\007\000\008\000\009\000\
\010\000\011\000\056\000\012\000\062\000\057\000\000\000\000\000\
\000\000\062\000\062\000\062\000\062\000\062\000\062\000\062\000\
\062\000\062\000\062\000\080\000\081\000\082\000\083\000\084\000\
\085\000\000\000\000\000\087\000\000\000\000\000\013\000\062\000\
\062\000\000\000\014\000\015\000\016\000\017\000\018\000\019\000\
\020\000\071\000\072\000\073\000\074\000\075\000\076\000\077\000\
\078\000\079\000\000\000\080\000\081\000\082\000\083\000\084\000\
\085\000\000\000\086\000\087\000\000\000\000\000\102\000\071\000\
\072\000\073\000\074\000\075\000\076\000\077\000\078\000\079\000\
\000\000\080\000\081\000\082\000\083\000\084\000\085\000\000\000\
\086\000\087\000\036\000\000\000\037\000\000\000\000\000\000\000\
\000\000\000\000\000\000\061\000\000\000\000\000\039\000\000\000\
\077\000\078\000\079\000\040\000\080\000\081\000\082\000\083\000\
\084\000\085\000\000\000\086\000\087\000\000\000\000\000\102\000\
\077\000\078\000\079\000\000\000\080\000\081\000\082\000\083\000\
\084\000\085\000\000\000\086\000\087\000\079\000\000\000\080\000\
\081\000\082\000\083\000\084\000\085\000\000\000\086\000\087\000"

let yycheck = "\010\000\
\000\000\019\000\020\001\021\001\067\000\045\000\001\000\012\001\
\013\001\000\001\035\000\001\000\042\001\038\000\025\000\036\000\
\037\000\038\000\048\001\010\001\015\001\012\001\013\001\014\001\
\042\001\020\001\021\001\045\000\023\000\047\000\041\000\001\001\
\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\
\061\000\011\001\010\001\054\000\069\000\070\000\057\000\042\001\
\088\000\089\000\071\000\072\000\073\000\074\000\075\000\076\000\
\077\000\078\000\079\000\080\000\081\000\082\000\083\000\084\000\
\085\000\086\000\087\000\130\000\038\001\000\001\088\000\089\000\
\048\001\091\000\044\001\045\001\046\001\047\001\048\001\042\001\
\043\001\102\000\000\001\014\001\042\001\096\000\000\001\001\001\
\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\001\
\014\001\011\001\001\001\002\001\003\001\004\001\005\001\006\001\
\007\001\008\001\009\001\000\001\011\001\001\001\002\001\003\001\
\004\001\005\001\006\001\007\001\008\001\009\001\046\001\011\001\
\015\001\014\001\000\001\046\001\038\001\020\001\021\001\088\000\
\089\000\042\001\044\001\045\001\046\001\047\001\048\001\038\001\
\014\001\043\001\043\001\042\001\043\001\044\001\045\001\046\001\
\047\001\048\001\038\001\016\001\017\001\018\001\019\001\043\001\
\044\001\045\001\046\001\047\001\048\001\042\001\042\001\010\001\
\029\001\020\001\031\001\010\001\046\001\015\001\042\001\042\001\
\042\001\038\001\020\001\021\001\041\001\015\001\042\001\023\000\
\047\000\046\001\020\001\021\001\022\001\023\001\024\001\025\001\
\026\001\027\001\028\001\029\001\030\001\015\001\015\001\091\000\
\042\001\095\000\020\001\021\001\021\001\039\001\015\001\056\000\
\042\001\043\001\028\000\020\001\021\001\022\001\023\001\024\001\
\025\001\026\001\027\001\028\001\029\001\030\001\015\001\102\000\
\042\001\042\001\255\255\020\001\021\001\255\255\039\001\015\001\
\255\255\042\001\043\001\255\255\020\001\021\001\022\001\023\001\
\024\001\025\001\026\001\027\001\028\001\029\001\255\255\015\001\
\000\001\042\001\015\001\255\255\020\001\021\001\255\255\020\001\
\021\001\255\255\042\001\043\001\012\001\013\001\014\001\255\255\
\255\255\001\001\002\001\003\001\004\001\005\001\006\001\007\001\
\008\001\009\001\042\001\011\001\015\001\042\001\255\255\255\255\
\255\255\020\001\021\001\022\001\023\001\024\001\025\001\026\001\
\027\001\028\001\029\001\032\001\033\001\034\001\035\001\036\001\
\037\001\255\255\255\255\040\001\255\255\255\255\038\001\042\001\
\043\001\255\255\042\001\043\001\044\001\045\001\046\001\047\001\
\048\001\022\001\023\001\024\001\025\001\026\001\027\001\028\001\
\029\001\030\001\255\255\032\001\033\001\034\001\035\001\036\001\
\037\001\255\255\039\001\040\001\255\255\255\255\043\001\022\001\
\023\001\024\001\025\001\026\001\027\001\028\001\029\001\030\001\
\255\255\032\001\033\001\034\001\035\001\036\001\037\001\255\255\
\039\001\040\001\029\001\255\255\031\001\255\255\255\255\255\255\
\255\255\255\255\255\255\038\001\255\255\255\255\041\001\255\255\
\028\001\029\001\030\001\046\001\032\001\033\001\034\001\035\001\
\036\001\037\001\255\255\039\001\040\001\255\255\255\255\043\001\
\028\001\029\001\030\001\255\255\032\001\033\001\034\001\035\001\
\036\001\037\001\255\255\039\001\040\001\030\001\255\255\032\001\
\033\001\034\001\035\001\036\001\037\001\255\255\039\001\040\001"

let yynames_const = "\
  TRUE\000\
  FALSE\000\
  DEFINED\000\
  NOT\000\
  AND\000\
  OR\000\
  EQ\000\
  LT\000\
  GT\000\
  NE\000\
  LE\000\
  GE\000\
  PLUS\000\
  MINUS\000\
  STAR\000\
  LNOT\000\
  LSL\000\
  LSR\000\
  ASR\000\
  LAND\000\
  LOR\000\
  LXOR\000\
  EOF\000\
  "

let yynames_block = "\
  DEF\000\
  DEFUN\000\
  UNDEF\000\
  INCLUDE\000\
  WARNING\000\
  ERROR\000\
  LINE\000\
  IFDEF\000\
  EXT\000\
  ENDEF\000\
  IF\000\
  ELIF\000\
  ELSE\000\
  ENDIF\000\
  ENDTEST\000\
  OP_PAREN\000\
  SLASH\000\
  MOD\000\
  INT\000\
  CL_PAREN\000\
  COMMA\000\
  CURRENT_LINE\000\
  CURRENT_FILE\000\
  IDENT\000\
  FUNIDENT\000\
  TEXT\000\
  "

let yyact = [|
  (fun _ -> failwith "parser")
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'unode) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.node list ) in
    Obj.repr(
# 42 "duniverse/cppo/src/cppo_parser.mly"
             ( _1 :: _2 )
# 370 "duniverse/cppo/src/cppo_parser.ml"
               :  Cppo_types.node list ))
; (fun __caml_parser_env ->
    Obj.repr(
# 43 "duniverse/cppo/src/cppo_parser.mly"
             ( [] )
# 376 "duniverse/cppo/src/cppo_parser.ml"
               :  Cppo_types.node list ))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'unode) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'unode_list0) in
    Obj.repr(
# 47 "duniverse/cppo/src/cppo_parser.mly"
                     ( _1 :: _2 )
# 384 "duniverse/cppo/src/cppo_parser.ml"
               : 'unode_list0))
; (fun __caml_parser_env ->
    Obj.repr(
# 48 "duniverse/cppo/src/cppo_parser.mly"
                     ( [] )
# 390 "duniverse/cppo/src/cppo_parser.ml"
               : 'unode_list0))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'pnode) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'pnode_list0) in
    Obj.repr(
# 52 "duniverse/cppo/src/cppo_parser.mly"
                     ( _1 :: _2 )
# 398 "duniverse/cppo/src/cppo_parser.ml"
               : 'pnode_list0))
; (fun __caml_parser_env ->
    Obj.repr(
# 53 "duniverse/cppo/src/cppo_parser.mly"
                     ( [] )
# 404 "duniverse/cppo/src/cppo_parser.ml"
               : 'pnode_list0))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'node) in
    Obj.repr(
# 58 "duniverse/cppo/src/cppo_parser.mly"
                ( _1 )
# 411 "duniverse/cppo/src/cppo_parser.ml"
               : 'unode))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 59 "duniverse/cppo/src/cppo_parser.mly"
                ( `Text (_1, false, "(") )
# 418 "duniverse/cppo/src/cppo_parser.ml"
               : 'unode))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 60 "duniverse/cppo/src/cppo_parser.mly"
                ( `Text (_1, false, ")") )
# 425 "duniverse/cppo/src/cppo_parser.ml"
               : 'unode))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 61 "duniverse/cppo/src/cppo_parser.mly"
                ( `Text (_1, false, ",") )
# 432 "duniverse/cppo/src/cppo_parser.ml"
               : 'unode))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'node) in
    Obj.repr(
# 66 "duniverse/cppo/src/cppo_parser.mly"
                ( _1 )
# 439 "duniverse/cppo/src/cppo_parser.ml"
               : 'pnode))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'pnode_or_comma_list0) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 68 "duniverse/cppo/src/cppo_parser.mly"
                ( `Seq [`Text (_1, false, "(");
                        `Seq _2;
                        `Text (_3, false, ")")] )
# 450 "duniverse/cppo/src/cppo_parser.ml"
               : 'pnode))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * bool * string ) in
    Obj.repr(
# 75 "duniverse/cppo/src/cppo_parser.mly"
                ( `Text _1 )
# 457 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 77 "duniverse/cppo/src/cppo_parser.mly"
                ( let loc, name = _1 in
                  `Ident (loc, name, None) )
# 465 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 :  Cppo_types.loc * string ) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'args1) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 81 "duniverse/cppo/src/cppo_parser.mly"
                (
                (* macro application that receives at least one argument,
                   possibly empty.  We cannot distinguish syntactically between
                   zero argument and one empty argument.
                *)
                  let (pos1, _), name = _1 in
                  let _, pos2 = _3 in
                  `Ident ((pos1, pos2), name, Some _2) )
# 481 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc * string ) in
    Obj.repr(
# 90 "duniverse/cppo/src/cppo_parser.mly"
                ( error (fst _1) "Invalid macro application" )
# 488 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 92 "duniverse/cppo/src/cppo_parser.mly"
                ( `Current_line _1 )
# 495 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 93 "duniverse/cppo/src/cppo_parser.mly"
                ( `Current_file _1 )
# 502 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 :  Cppo_types.loc * string ) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'unode_list0) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 96 "duniverse/cppo/src/cppo_parser.mly"
                ( let (pos1, _), name = _1 in

                  (* Additional spacing is needed for cases like '+foo+'
                     expanding into '++' instead of '+ +'. *)
                  let safe_space = `Text (_3, true, " ") in

                  let body = _2 @ [safe_space] in
                  let _, pos2 = _3 in
                  `Def ((pos1, pos2), name, body) )
# 519 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 4 :  Cppo_types.loc * string ) in
    let _2 = (Parsing.peek_val __caml_parser_env 3 : 'def_args1) in
    let _3 = (Parsing.peek_val __caml_parser_env 2 :  Cppo_types.loc ) in
    let _4 = (Parsing.peek_val __caml_parser_env 1 : 'unode_list0) in
    let _5 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 107 "duniverse/cppo/src/cppo_parser.mly"
                ( let (pos1, _), name = _1 in
                  let args = _2 in

                  (* Additional spacing is needed for cases like 'foo()bar'
                     where 'foo()' expands into 'abc', giving 'abcbar'
                     instead of 'abc bar';
                     Also needed for '+foo()+' expanding into '++' instead
                     of '+ +'. *)
                  let safe_space = `Text (_5, true, " ") in

                  let body = _4 @ [safe_space] in
                  let _, pos2 = _5 in
                  `Defun ((pos1, pos2), name, args, body) )
# 542 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc * string ) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 122 "duniverse/cppo/src/cppo_parser.mly"
                ( error (fst (fst _1), snd _2)
                    "At least one argument is required" )
# 551 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 126 "duniverse/cppo/src/cppo_parser.mly"
                ( `Undef _1 )
# 558 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 128 "duniverse/cppo/src/cppo_parser.mly"
                ( `Warning _1 )
# 565 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 130 "duniverse/cppo/src/cppo_parser.mly"
                ( `Error _1 )
# 572 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 133 "duniverse/cppo/src/cppo_parser.mly"
                ( `Include _1 )
# 579 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string * string ) in
    Obj.repr(
# 136 "duniverse/cppo/src/cppo_parser.mly"
                ( `Ext _1 )
# 586 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 4 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 3 : 'test) in
    let _3 = (Parsing.peek_val __caml_parser_env 2 : 'unode_list0) in
    let _4 = (Parsing.peek_val __caml_parser_env 1 : 'elif_list) in
    let _5 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 139 "duniverse/cppo/src/cppo_parser.mly"
                ( let pos1, _ = _1 in
                  let _, pos2 = _5 in
                  let loc = (pos1, pos2) in
                  let test = _2 in
                  let if_true = _3 in
                  let if_false =
                    List.fold_right (
                      fun (loc, test, if_true) if_false ->
                        [`Cond (loc, test, if_true, if_false) ]
                    ) _4 []
                  in
                  `Cond (loc, test, if_true, if_false)
                )
# 609 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 4 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 3 : 'test) in
    let _3 = (Parsing.peek_val __caml_parser_env 2 : 'unode_list0) in
    let _4 = (Parsing.peek_val __caml_parser_env 1 : 'elif_list) in
    Obj.repr(
# 154 "duniverse/cppo/src/cppo_parser.mly"
                ( (* BUG? ocamlyacc fails to reduce that rule but not menhir *)
                  error _1 "missing #endif" )
# 620 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 3 :  Cppo_types.loc * Cppo_types.bool_expr ) in
    let _2 = (Parsing.peek_val __caml_parser_env 2 : 'unode_list0) in
    let _3 = (Parsing.peek_val __caml_parser_env 1 : 'elif_list) in
    let _4 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 158 "duniverse/cppo/src/cppo_parser.mly"
                ( let (pos1, _), test = _1 in
                  let _, pos2 = _4 in
                  let loc = (pos1, pos2) in
                  let if_true = _2 in
                  let if_false =
                    List.fold_right (
                      fun (loc, test, if_true) if_false ->
                        [`Cond (loc, test, if_true, if_false) ]
                    ) _3 []
                  in
                  `Cond (loc, test, if_true, if_false)
                )
# 641 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 3 :  Cppo_types.loc * Cppo_types.bool_expr ) in
    let _2 = (Parsing.peek_val __caml_parser_env 2 : 'unode_list0) in
    let _3 = (Parsing.peek_val __caml_parser_env 1 : 'elif_list) in
    Obj.repr(
# 172 "duniverse/cppo/src/cppo_parser.mly"
                ( error (fst _1) "missing #endif" )
# 650 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string option * int ) in
    Obj.repr(
# 174 "duniverse/cppo/src/cppo_parser.mly"
                ( `Line _1 )
# 657 "duniverse/cppo/src/cppo_parser.ml"
               : 'node))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 3 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 2 : 'test) in
    let _3 = (Parsing.peek_val __caml_parser_env 1 : 'unode_list0) in
    let _4 = (Parsing.peek_val __caml_parser_env 0 : 'elif_list) in
    Obj.repr(
# 180 "duniverse/cppo/src/cppo_parser.mly"
                   ( let pos1, _ = _1 in
                     let pos2 = Parsing.rhs_end_pos 4 in
                     ((pos1, pos2), _2, _3) :: _4 )
# 669 "duniverse/cppo/src/cppo_parser.ml"
               : 'elif_list))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'unode_list0) in
    Obj.repr(
# 184 "duniverse/cppo/src/cppo_parser.mly"
                   ( let pos1, _ = _1 in
                     let pos2 = Parsing.rhs_end_pos 2 in
                     [ ((pos1, pos2), `True, _2) ] )
# 679 "duniverse/cppo/src/cppo_parser.ml"
               : 'elif_list))
; (fun __caml_parser_env ->
    Obj.repr(
# 187 "duniverse/cppo/src/cppo_parser.mly"
                   ( [] )
# 685 "duniverse/cppo/src/cppo_parser.ml"
               : 'elif_list))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'pnode_list0) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc ) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'args1) in
    Obj.repr(
# 191 "duniverse/cppo/src/cppo_parser.mly"
                            ( _1 :: _3  )
# 694 "duniverse/cppo/src/cppo_parser.ml"
               : 'args1))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'pnode_list0) in
    Obj.repr(
# 192 "duniverse/cppo/src/cppo_parser.mly"
                            ( [ _1 ] )
# 701 "duniverse/cppo/src/cppo_parser.ml"
               : 'args1))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'pnode) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'pnode_or_comma_list0) in
    Obj.repr(
# 196 "duniverse/cppo/src/cppo_parser.mly"
                               ( _1 :: _2 )
# 709 "duniverse/cppo/src/cppo_parser.ml"
               : 'pnode_or_comma_list0))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'pnode_or_comma_list0) in
    Obj.repr(
# 197 "duniverse/cppo/src/cppo_parser.mly"
                               ( `Text (_1, false, ",") :: _2 )
# 717 "duniverse/cppo/src/cppo_parser.ml"
               : 'pnode_or_comma_list0))
; (fun __caml_parser_env ->
    Obj.repr(
# 198 "duniverse/cppo/src/cppo_parser.mly"
                               ( [] )
# 723 "duniverse/cppo/src/cppo_parser.ml"
               : 'pnode_or_comma_list0))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 3 : 'arg_blank) in
    let _2 = (Parsing.peek_val __caml_parser_env 2 :  Cppo_types.loc * string ) in
    let _3 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc ) in
    let _4 = (Parsing.peek_val __caml_parser_env 0 : 'def_args1) in
    Obj.repr(
# 203 "duniverse/cppo/src/cppo_parser.mly"
                               ( (snd _2) :: _4 )
# 733 "duniverse/cppo/src/cppo_parser.ml"
               : 'def_args1))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'arg_blank) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 204 "duniverse/cppo/src/cppo_parser.mly"
                               ( [ snd _2 ] )
# 741 "duniverse/cppo/src/cppo_parser.ml"
               : 'def_args1))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc * bool * string ) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'arg_blank) in
    Obj.repr(
# 208 "duniverse/cppo/src/cppo_parser.mly"
                         ( let loc, is_space, _s = _1 in
                           if not is_space then
                             error loc "Invalid argument list"
                         )
# 752 "duniverse/cppo/src/cppo_parser.ml"
               : 'arg_blank))
; (fun __caml_parser_env ->
    Obj.repr(
# 212 "duniverse/cppo/src/cppo_parser.mly"
                         ( () )
# 758 "duniverse/cppo/src/cppo_parser.ml"
               : 'arg_blank))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 1 : 'bexpr) in
    let _2 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 216 "duniverse/cppo/src/cppo_parser.mly"
                ( _1 )
# 766 "duniverse/cppo/src/cppo_parser.ml"
               : 'test))
; (fun __caml_parser_env ->
    Obj.repr(
# 221 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `True )
# 772 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    Obj.repr(
# 222 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `False )
# 778 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 223 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Defined (snd _2) )
# 785 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'bexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 224 "duniverse/cppo/src/cppo_parser.mly"
                                    ( _2 )
# 794 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'bexpr) in
    Obj.repr(
# 225 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Not _2 )
# 801 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'bexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'bexpr) in
    Obj.repr(
# 226 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `And (_1, _3) )
# 809 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'bexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'bexpr) in
    Obj.repr(
# 227 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Or (_1, _3) )
# 817 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 228 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Eq (_1, _3) )
# 825 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 229 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Lt (_1, _3) )
# 833 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 230 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Gt (_1, _3) )
# 841 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 231 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Not (`Eq (_1, _3)) )
# 849 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 232 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Not (`Gt (_1, _3)) )
# 857 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 233 "duniverse/cppo/src/cppo_parser.mly"
                                    ( `Not (`Lt (_1, _3)) )
# 865 "duniverse/cppo/src/cppo_parser.ml"
               : 'bexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  int64 ) in
    Obj.repr(
# 238 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Int _1 )
# 872 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc * string ) in
    Obj.repr(
# 239 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Ident _1 )
# 879 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 :  Cppo_types.loc ) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 : 'aexpr_list) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 :  Cppo_types.loc ) in
    Obj.repr(
# 241 "duniverse/cppo/src/cppo_parser.mly"
                             ( match _2 with
                               | [x] -> x
                               | l ->
                                 let pos1, _ = _1 in
                                 let _, pos2 = _3 in
                                 `Tuple ((pos1, pos2), l)
                             )
# 894 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 248 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Add (_1, _3) )
# 902 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 249 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Sub (_1, _3) )
# 910 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 250 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Mul (_1, _3) )
# 918 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc ) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 251 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Div (_2, _1, _3) )
# 927 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc ) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 252 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Mod (_2, _1, _3) )
# 936 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 253 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Lsl (_1, _3) )
# 944 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 254 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Lsr (_1, _3) )
# 952 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 255 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Asr (_1, _3) )
# 960 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 256 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Land (_1, _3) )
# 968 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 257 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Lor (_1, _3) )
# 976 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 258 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Lxor (_1, _3) )
# 984 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 259 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Lnot _2 )
# 991 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _2 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 260 "duniverse/cppo/src/cppo_parser.mly"
                             ( `Neg _2 )
# 998 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 2 : 'aexpr) in
    let _2 = (Parsing.peek_val __caml_parser_env 1 :  Cppo_types.loc ) in
    let _3 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr_list) in
    Obj.repr(
# 264 "duniverse/cppo/src/cppo_parser.mly"
                             ( _1 :: _3 )
# 1007 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr_list))
; (fun __caml_parser_env ->
    let _1 = (Parsing.peek_val __caml_parser_env 0 : 'aexpr) in
    Obj.repr(
# 265 "duniverse/cppo/src/cppo_parser.mly"
                             ( [_1] )
# 1014 "duniverse/cppo/src/cppo_parser.ml"
               : 'aexpr_list))
(* Entry main *)
; (fun __caml_parser_env -> raise (Parsing.YYexit (Parsing.peek_val __caml_parser_env 0)))
|]
let yytables =
  { Parsing.actions=yyact;
    Parsing.transl_const=yytransl_const;
    Parsing.transl_block=yytransl_block;
    Parsing.lhs=yylhs;
    Parsing.len=yylen;
    Parsing.defred=yydefred;
    Parsing.dgoto=yydgoto;
    Parsing.sindex=yysindex;
    Parsing.rindex=yyrindex;
    Parsing.gindex=yygindex;
    Parsing.tablesize=yytablesize;
    Parsing.table=yytable;
    Parsing.check=yycheck;
    Parsing.error_function=parse_error;
    Parsing.names_const=yynames_const;
    Parsing.names_block=yynames_block }
let main (lexfun : Lexing.lexbuf -> token) (lexbuf : Lexing.lexbuf) =
   (Parsing.yyparse yytables 1 lexfun lexbuf :  Cppo_types.node list )
